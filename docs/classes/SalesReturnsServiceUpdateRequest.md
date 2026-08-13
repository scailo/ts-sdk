[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesReturnsServiceUpdateRequest

# Class: SalesReturnsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.SalesReturnsServiceUpdateRequest

## Hierarchy

- `Message`\<[`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)\>

  ↳ **`SalesReturnsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SalesReturnsServiceUpdateRequest.md#constructor)

### Properties

- [formData](SalesReturnsServiceUpdateRequest.md#formdata)
- [id](SalesReturnsServiceUpdateRequest.md#id)
- [notifyUsers](SalesReturnsServiceUpdateRequest.md#notifyusers)
- [referenceId](SalesReturnsServiceUpdateRequest.md#referenceid)
- [userComment](SalesReturnsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](SalesReturnsServiceUpdateRequest.md#vaultfolderid)
- [fields](SalesReturnsServiceUpdateRequest.md#fields)
- [runtime](SalesReturnsServiceUpdateRequest.md#runtime)
- [typeName](SalesReturnsServiceUpdateRequest.md#typename)

### Methods

- [clone](SalesReturnsServiceUpdateRequest.md#clone)
- [equals](SalesReturnsServiceUpdateRequest.md#equals)
- [fromBinary](SalesReturnsServiceUpdateRequest.md#frombinary)
- [fromJson](SalesReturnsServiceUpdateRequest.md#fromjson)
- [fromJsonString](SalesReturnsServiceUpdateRequest.md#fromjsonstring)
- [getType](SalesReturnsServiceUpdateRequest.md#gettype)
- [toBinary](SalesReturnsServiceUpdateRequest.md#tobinary)
- [toJSON](SalesReturnsServiceUpdateRequest.md#tojson)
- [toJson](SalesReturnsServiceUpdateRequest.md#tojson-1)
- [toJsonString](SalesReturnsServiceUpdateRequest.md#tojsonstring)
- [equals](SalesReturnsServiceUpdateRequest.md#equals-1)
- [fromBinary](SalesReturnsServiceUpdateRequest.md#frombinary-1)
- [fromJson](SalesReturnsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](SalesReturnsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReturnsServiceUpdateRequest**(`data?`): [`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)\> |

#### Returns

[`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)

#### Overrides

Message\&lt;SalesReturnsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/sales_returns.scailo_pb.ts:520](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_returns.scailo_pb.ts#L520)

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

[src/sales_returns.scailo_pb.ts:518](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_returns.scailo_pb.ts#L518)

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

[src/sales_returns.scailo_pb.ts:460](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_returns.scailo_pb.ts#L460)

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

[src/sales_returns.scailo_pb.ts:472](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_returns.scailo_pb.ts#L472)

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

[src/sales_returns.scailo_pb.ts:504](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_returns.scailo_pb.ts#L504)

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

[src/sales_returns.scailo_pb.ts:444](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_returns.scailo_pb.ts#L444)

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

[src/sales_returns.scailo_pb.ts:488](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_returns.scailo_pb.ts#L488)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_returns.scailo_pb.ts:527](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_returns.scailo_pb.ts#L527)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_returns.scailo_pb.ts:525](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_returns.scailo_pb.ts#L525)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesReturnsServiceUpdateRequest"``

#### Defined in

[src/sales_returns.scailo_pb.ts:526](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_returns.scailo_pb.ts#L526)

## Methods

### clone

▸ **clone**(): [`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md) \| `PlainMessage`\<[`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md) \| `PlainMessage`\<[`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md) \| `PlainMessage`\<[`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_returns.scailo_pb.ts:548](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_returns.scailo_pb.ts#L548)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)

#### Defined in

[src/sales_returns.scailo_pb.ts:536](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_returns.scailo_pb.ts#L536)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)

#### Defined in

[src/sales_returns.scailo_pb.ts:540](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_returns.scailo_pb.ts#L540)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceUpdateRequest`](SalesReturnsServiceUpdateRequest.md)

#### Defined in

[src/sales_returns.scailo_pb.ts:544](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_returns.scailo_pb.ts#L544)
