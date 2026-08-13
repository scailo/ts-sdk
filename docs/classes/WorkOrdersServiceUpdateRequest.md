[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / WorkOrdersServiceUpdateRequest

# Class: WorkOrdersServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.WorkOrdersServiceUpdateRequest

## Hierarchy

- `Message`\<[`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)\>

  ↳ **`WorkOrdersServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](WorkOrdersServiceUpdateRequest.md#constructor)

### Properties

- [formData](WorkOrdersServiceUpdateRequest.md#formdata)
- [id](WorkOrdersServiceUpdateRequest.md#id)
- [notifyUsers](WorkOrdersServiceUpdateRequest.md#notifyusers)
- [referenceId](WorkOrdersServiceUpdateRequest.md#referenceid)
- [userComment](WorkOrdersServiceUpdateRequest.md#usercomment)
- [vaultFolderId](WorkOrdersServiceUpdateRequest.md#vaultfolderid)
- [fields](WorkOrdersServiceUpdateRequest.md#fields)
- [runtime](WorkOrdersServiceUpdateRequest.md#runtime)
- [typeName](WorkOrdersServiceUpdateRequest.md#typename)

### Methods

- [clone](WorkOrdersServiceUpdateRequest.md#clone)
- [equals](WorkOrdersServiceUpdateRequest.md#equals)
- [fromBinary](WorkOrdersServiceUpdateRequest.md#frombinary)
- [fromJson](WorkOrdersServiceUpdateRequest.md#fromjson)
- [fromJsonString](WorkOrdersServiceUpdateRequest.md#fromjsonstring)
- [getType](WorkOrdersServiceUpdateRequest.md#gettype)
- [toBinary](WorkOrdersServiceUpdateRequest.md#tobinary)
- [toJSON](WorkOrdersServiceUpdateRequest.md#tojson)
- [toJson](WorkOrdersServiceUpdateRequest.md#tojson-1)
- [toJsonString](WorkOrdersServiceUpdateRequest.md#tojsonstring)
- [equals](WorkOrdersServiceUpdateRequest.md#equals-1)
- [fromBinary](WorkOrdersServiceUpdateRequest.md#frombinary-1)
- [fromJson](WorkOrdersServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](WorkOrdersServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkOrdersServiceUpdateRequest**(`data?`): [`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)\> |

#### Returns

[`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)

#### Overrides

Message\&lt;WorkOrdersServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/work_orders.scailo_pb.ts:493](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L493)

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

[src/work_orders.scailo_pb.ts:491](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L491)

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

[src/work_orders.scailo_pb.ts:433](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L433)

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

[src/work_orders.scailo_pb.ts:445](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L445)

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

[src/work_orders.scailo_pb.ts:477](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L477)

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

[src/work_orders.scailo_pb.ts:417](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L417)

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

[src/work_orders.scailo_pb.ts:461](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L461)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/work_orders.scailo_pb.ts:500](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L500)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/work_orders.scailo_pb.ts:498](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L498)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.WorkOrdersServiceUpdateRequest"``

#### Defined in

[src/work_orders.scailo_pb.ts:499](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L499)

## Methods

### clone

▸ **clone**(): [`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md) \| `PlainMessage`\<[`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md) \| `PlainMessage`\<[`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md) \| `PlainMessage`\<[`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/work_orders.scailo_pb.ts:521](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L521)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)

#### Defined in

[src/work_orders.scailo_pb.ts:509](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L509)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)

#### Defined in

[src/work_orders.scailo_pb.ts:513](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L513)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceUpdateRequest`](WorkOrdersServiceUpdateRequest.md)

#### Defined in

[src/work_orders.scailo_pb.ts:517](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/work_orders.scailo_pb.ts#L517)
