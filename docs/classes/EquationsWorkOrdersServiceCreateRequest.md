[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsWorkOrdersServiceCreateRequest

# Class: EquationsWorkOrdersServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.EquationsWorkOrdersServiceCreateRequest

## Hierarchy

- `Message`\<[`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)\>

  ↳ **`EquationsWorkOrdersServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](EquationsWorkOrdersServiceCreateRequest.md#constructor)

### Properties

- [description](EquationsWorkOrdersServiceCreateRequest.md#description)
- [entityUuid](EquationsWorkOrdersServiceCreateRequest.md#entityuuid)
- [name](EquationsWorkOrdersServiceCreateRequest.md#name)
- [userComment](EquationsWorkOrdersServiceCreateRequest.md#usercomment)
- [vaultFolderId](EquationsWorkOrdersServiceCreateRequest.md#vaultfolderid)
- [workOrderId](EquationsWorkOrdersServiceCreateRequest.md#workorderid)
- [fields](EquationsWorkOrdersServiceCreateRequest.md#fields)
- [runtime](EquationsWorkOrdersServiceCreateRequest.md#runtime)
- [typeName](EquationsWorkOrdersServiceCreateRequest.md#typename)

### Methods

- [clone](EquationsWorkOrdersServiceCreateRequest.md#clone)
- [equals](EquationsWorkOrdersServiceCreateRequest.md#equals)
- [fromBinary](EquationsWorkOrdersServiceCreateRequest.md#frombinary)
- [fromJson](EquationsWorkOrdersServiceCreateRequest.md#fromjson)
- [fromJsonString](EquationsWorkOrdersServiceCreateRequest.md#fromjsonstring)
- [getType](EquationsWorkOrdersServiceCreateRequest.md#gettype)
- [toBinary](EquationsWorkOrdersServiceCreateRequest.md#tobinary)
- [toJSON](EquationsWorkOrdersServiceCreateRequest.md#tojson)
- [toJson](EquationsWorkOrdersServiceCreateRequest.md#tojson-1)
- [toJsonString](EquationsWorkOrdersServiceCreateRequest.md#tojsonstring)
- [equals](EquationsWorkOrdersServiceCreateRequest.md#equals-1)
- [fromBinary](EquationsWorkOrdersServiceCreateRequest.md#frombinary-1)
- [fromJson](EquationsWorkOrdersServiceCreateRequest.md#fromjson-1)
- [fromJsonString](EquationsWorkOrdersServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsWorkOrdersServiceCreateRequest**(`data?`): [`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)\> |

#### Returns

[`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)

#### Overrides

Message\&lt;EquationsWorkOrdersServiceCreateRequest\&gt;.constructor

#### Defined in

[src/equations_work_orders.scailo_pb.ts:268](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L268)

## Properties

### description

• **description**: `string` = `""`

The description of the equation work order

**`Generated`**

from field: string description = 13;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:266](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L266)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:231](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L231)

___

### name

• **name**: `string` = `""`

The name of the equation work order

**`Generated`**

from field: string name = 10;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:252](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L252)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:238](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L238)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:245](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L245)

___

### workOrderId

• **workOrderId**: `bigint` = `protoInt64.zero`

The ID of the work order that this equation belongs to

**`Generated`**

from field: uint64 work_order_id = 12;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:259](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L259)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_work_orders.scailo_pb.ts:275](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L275)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_work_orders.scailo_pb.ts:273](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L273)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsWorkOrdersServiceCreateRequest"``

#### Defined in

[src/equations_work_orders.scailo_pb.ts:274](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L274)

## Methods

### clone

▸ **clone**(): [`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md) \| `PlainMessage`\<[`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md) \| `PlainMessage`\<[`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md) \| `PlainMessage`\<[`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_work_orders.scailo_pb.ts:296](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L296)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)

#### Defined in

[src/equations_work_orders.scailo_pb.ts:284](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L284)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)

#### Defined in

[src/equations_work_orders.scailo_pb.ts:288](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L288)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceCreateRequest`](EquationsWorkOrdersServiceCreateRequest.md)

#### Defined in

[src/equations_work_orders.scailo_pb.ts:292](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L292)
