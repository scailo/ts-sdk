[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockAuditsServiceUpdateRequest

# Class: StockAuditsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.StockAuditsServiceUpdateRequest

## Hierarchy

- `Message`\<[`StockAuditsServiceUpdateRequest`](StockAuditsServiceUpdateRequest.md)\>

  ↳ **`StockAuditsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](StockAuditsServiceUpdateRequest.md#constructor)

### Properties

- [formData](StockAuditsServiceUpdateRequest.md#formdata)
- [id](StockAuditsServiceUpdateRequest.md#id)
- [notifyUsers](StockAuditsServiceUpdateRequest.md#notifyusers)
- [referenceId](StockAuditsServiceUpdateRequest.md#referenceid)
- [userComment](StockAuditsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](StockAuditsServiceUpdateRequest.md#vaultfolderid)
- [fields](StockAuditsServiceUpdateRequest.md#fields)
- [runtime](StockAuditsServiceUpdateRequest.md#runtime)
- [typeName](StockAuditsServiceUpdateRequest.md#typename)

### Methods

- [clone](StockAuditsServiceUpdateRequest.md#clone)
- [equals](StockAuditsServiceUpdateRequest.md#equals)
- [fromBinary](StockAuditsServiceUpdateRequest.md#frombinary)
- [fromJson](StockAuditsServiceUpdateRequest.md#fromjson)
- [fromJsonString](StockAuditsServiceUpdateRequest.md#fromjsonstring)
- [getType](StockAuditsServiceUpdateRequest.md#gettype)
- [toBinary](StockAuditsServiceUpdateRequest.md#tobinary)
- [toJSON](StockAuditsServiceUpdateRequest.md#tojson)
- [toJson](StockAuditsServiceUpdateRequest.md#tojson-1)
- [toJsonString](StockAuditsServiceUpdateRequest.md#tojsonstring)
- [equals](StockAuditsServiceUpdateRequest.md#equals-1)
- [fromBinary](StockAuditsServiceUpdateRequest.md#frombinary-1)
- [fromJson](StockAuditsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](StockAuditsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockAuditsServiceUpdateRequest**(`data?`): [`StockAuditsServiceUpdateRequest`](StockAuditsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockAuditsServiceUpdateRequest`](StockAuditsServiceUpdateRequest.md)\> |

#### Returns

[`StockAuditsServiceUpdateRequest`](StockAuditsServiceUpdateRequest.md)

#### Overrides

Message\&lt;StockAuditsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/stock_audits.scailo_pb.ts:434](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/stock_audits.scailo_pb.ts#L434)

## Properties

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

**`Optional`**

**`Description`**

A collection of dynamic form fields for organization-specific data.

**`Example`**

```ts
[]
```

**`Format`**

An array/list of FormFieldDatumCreateRequest entries. Can be left empty if no custom attributes are needed.

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/stock_audits.scailo_pb.ts:432](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/stock_audits.scailo_pb.ts#L432)

___

### id

• **id**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target record that needs to be updated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/stock_audits.scailo_pb.ts:374](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/stock_audits.scailo_pb.ts#L374)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/stock_audits.scailo_pb.ts:386](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/stock_audits.scailo_pb.ts#L386)

___

### referenceId

• **referenceId**: `string` = `""`

**`Mandatory`**

**`Description`**

Updated alphanumeric reference ID. Must contain at least 1 character.

**`Example`**

```ts
"ABS-2023-001-REV"
```

**`Regex`**

"[0-9A-Za-z ]+$"

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/stock_audits.scailo_pb.ts:418](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/stock_audits.scailo_pb.ts#L418)

___

### userComment

• **userComment**: `string` = `""`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/stock_audits.scailo_pb.ts:358](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/stock_audits.scailo_pb.ts#L358)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Updated vault folder ID for documentation storage.

**`Example`**

```ts
15235
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/stock_audits.scailo_pb.ts:402](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/stock_audits.scailo_pb.ts#L402)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_audits.scailo_pb.ts:441](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/stock_audits.scailo_pb.ts#L441)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_audits.scailo_pb.ts:439](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/stock_audits.scailo_pb.ts#L439)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockAuditsServiceUpdateRequest"``

#### Defined in

[src/stock_audits.scailo_pb.ts:440](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/stock_audits.scailo_pb.ts#L440)

## Methods

### clone

▸ **clone**(): [`StockAuditsServiceUpdateRequest`](StockAuditsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`StockAuditsServiceUpdateRequest`](StockAuditsServiceUpdateRequest.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`StockAuditsServiceUpdateRequest`](StockAuditsServiceUpdateRequest.md) \| `PlainMessage`\<[`StockAuditsServiceUpdateRequest`](StockAuditsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`StockAuditsServiceUpdateRequest`](StockAuditsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockAuditsServiceUpdateRequest`](StockAuditsServiceUpdateRequest.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`StockAuditsServiceUpdateRequest`](StockAuditsServiceUpdateRequest.md) \| `PlainMessage`\<[`StockAuditsServiceUpdateRequest`](StockAuditsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`StockAuditsServiceUpdateRequest`](StockAuditsServiceUpdateRequest.md) \| `PlainMessage`\<[`StockAuditsServiceUpdateRequest`](StockAuditsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_audits.scailo_pb.ts:462](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/stock_audits.scailo_pb.ts#L462)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockAuditsServiceUpdateRequest`](StockAuditsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockAuditsServiceUpdateRequest`](StockAuditsServiceUpdateRequest.md)

#### Defined in

[src/stock_audits.scailo_pb.ts:450](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/stock_audits.scailo_pb.ts#L450)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockAuditsServiceUpdateRequest`](StockAuditsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockAuditsServiceUpdateRequest`](StockAuditsServiceUpdateRequest.md)

#### Defined in

[src/stock_audits.scailo_pb.ts:454](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/stock_audits.scailo_pb.ts#L454)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockAuditsServiceUpdateRequest`](StockAuditsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockAuditsServiceUpdateRequest`](StockAuditsServiceUpdateRequest.md)

#### Defined in

[src/stock_audits.scailo_pb.ts:458](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/stock_audits.scailo_pb.ts#L458)
