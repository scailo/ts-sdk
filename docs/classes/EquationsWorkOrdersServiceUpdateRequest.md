[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsWorkOrdersServiceUpdateRequest

# Class: EquationsWorkOrdersServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.EquationsWorkOrdersServiceUpdateRequest

## Hierarchy

- `Message`\<[`EquationsWorkOrdersServiceUpdateRequest`](EquationsWorkOrdersServiceUpdateRequest.md)\>

  ↳ **`EquationsWorkOrdersServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](EquationsWorkOrdersServiceUpdateRequest.md#constructor)

### Properties

- [description](EquationsWorkOrdersServiceUpdateRequest.md#description)
- [id](EquationsWorkOrdersServiceUpdateRequest.md#id)
- [name](EquationsWorkOrdersServiceUpdateRequest.md#name)
- [notifyUsers](EquationsWorkOrdersServiceUpdateRequest.md#notifyusers)
- [userComment](EquationsWorkOrdersServiceUpdateRequest.md#usercomment)
- [vaultFolderId](EquationsWorkOrdersServiceUpdateRequest.md#vaultfolderid)
- [fields](EquationsWorkOrdersServiceUpdateRequest.md#fields)
- [runtime](EquationsWorkOrdersServiceUpdateRequest.md#runtime)
- [typeName](EquationsWorkOrdersServiceUpdateRequest.md#typename)

### Methods

- [clone](EquationsWorkOrdersServiceUpdateRequest.md#clone)
- [equals](EquationsWorkOrdersServiceUpdateRequest.md#equals)
- [fromBinary](EquationsWorkOrdersServiceUpdateRequest.md#frombinary)
- [fromJson](EquationsWorkOrdersServiceUpdateRequest.md#fromjson)
- [fromJsonString](EquationsWorkOrdersServiceUpdateRequest.md#fromjsonstring)
- [getType](EquationsWorkOrdersServiceUpdateRequest.md#gettype)
- [toBinary](EquationsWorkOrdersServiceUpdateRequest.md#tobinary)
- [toJSON](EquationsWorkOrdersServiceUpdateRequest.md#tojson)
- [toJson](EquationsWorkOrdersServiceUpdateRequest.md#tojson-1)
- [toJsonString](EquationsWorkOrdersServiceUpdateRequest.md#tojsonstring)
- [equals](EquationsWorkOrdersServiceUpdateRequest.md#equals-1)
- [fromBinary](EquationsWorkOrdersServiceUpdateRequest.md#frombinary-1)
- [fromJson](EquationsWorkOrdersServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](EquationsWorkOrdersServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsWorkOrdersServiceUpdateRequest**(`data?`): [`EquationsWorkOrdersServiceUpdateRequest`](EquationsWorkOrdersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsWorkOrdersServiceUpdateRequest`](EquationsWorkOrdersServiceUpdateRequest.md)\> |

#### Returns

[`EquationsWorkOrdersServiceUpdateRequest`](EquationsWorkOrdersServiceUpdateRequest.md)

#### Overrides

Message\&lt;EquationsWorkOrdersServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/equations_work_orders.scailo_pb.ts:382](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L382)

## Properties

### description

• **description**: `string` = `""`

The description of the equation work order

**`Generated`**

from field: string description = 13;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:380](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L380)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:338](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L338)

___

### name

• **name**: `string` = `""`

The name of the equation work order

**`Generated`**

from field: string name = 10;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:373](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L373)

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

[src/equations_work_orders.scailo_pb.ts:350](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L350)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:331](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L331)

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

[src/equations_work_orders.scailo_pb.ts:366](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L366)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_work_orders.scailo_pb.ts:389](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L389)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_work_orders.scailo_pb.ts:387](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L387)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsWorkOrdersServiceUpdateRequest"``

#### Defined in

[src/equations_work_orders.scailo_pb.ts:388](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L388)

## Methods

### clone

▸ **clone**(): [`EquationsWorkOrdersServiceUpdateRequest`](EquationsWorkOrdersServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`EquationsWorkOrdersServiceUpdateRequest`](EquationsWorkOrdersServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsWorkOrdersServiceUpdateRequest`](EquationsWorkOrdersServiceUpdateRequest.md) \| `PlainMessage`\<[`EquationsWorkOrdersServiceUpdateRequest`](EquationsWorkOrdersServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsWorkOrdersServiceUpdateRequest`](EquationsWorkOrdersServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsWorkOrdersServiceUpdateRequest`](EquationsWorkOrdersServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`EquationsWorkOrdersServiceUpdateRequest`](EquationsWorkOrdersServiceUpdateRequest.md) \| `PlainMessage`\<[`EquationsWorkOrdersServiceUpdateRequest`](EquationsWorkOrdersServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`EquationsWorkOrdersServiceUpdateRequest`](EquationsWorkOrdersServiceUpdateRequest.md) \| `PlainMessage`\<[`EquationsWorkOrdersServiceUpdateRequest`](EquationsWorkOrdersServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_work_orders.scailo_pb.ts:410](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L410)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsWorkOrdersServiceUpdateRequest`](EquationsWorkOrdersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceUpdateRequest`](EquationsWorkOrdersServiceUpdateRequest.md)

#### Defined in

[src/equations_work_orders.scailo_pb.ts:398](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L398)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsWorkOrdersServiceUpdateRequest`](EquationsWorkOrdersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceUpdateRequest`](EquationsWorkOrdersServiceUpdateRequest.md)

#### Defined in

[src/equations_work_orders.scailo_pb.ts:402](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L402)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsWorkOrdersServiceUpdateRequest`](EquationsWorkOrdersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceUpdateRequest`](EquationsWorkOrdersServiceUpdateRequest.md)

#### Defined in

[src/equations_work_orders.scailo_pb.ts:406](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_work_orders.scailo_pb.ts#L406)
