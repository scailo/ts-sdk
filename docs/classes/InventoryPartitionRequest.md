[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InventoryPartitionRequest

# Class: InventoryPartitionRequest

Describes the parameters required to partition an inventory lot

**`Generated`**

from message Scailo.InventoryPartitionRequest

## Hierarchy

- `Message`\<[`InventoryPartitionRequest`](InventoryPartitionRequest.md)\>

  ↳ **`InventoryPartitionRequest`**

## Table of contents

### Constructors

- [constructor](InventoryPartitionRequest.md#constructor)

### Properties

- [id](InventoryPartitionRequest.md#id)
- [partitionQuantity](InventoryPartitionRequest.md#partitionquantity)
- [partitionSecondaryQuantity](InventoryPartitionRequest.md#partitionsecondaryquantity)
- [userComment](InventoryPartitionRequest.md#usercomment)
- [fields](InventoryPartitionRequest.md#fields)
- [runtime](InventoryPartitionRequest.md#runtime)
- [typeName](InventoryPartitionRequest.md#typename)

### Methods

- [clone](InventoryPartitionRequest.md#clone)
- [equals](InventoryPartitionRequest.md#equals)
- [fromBinary](InventoryPartitionRequest.md#frombinary)
- [fromJson](InventoryPartitionRequest.md#fromjson)
- [fromJsonString](InventoryPartitionRequest.md#fromjsonstring)
- [getType](InventoryPartitionRequest.md#gettype)
- [toBinary](InventoryPartitionRequest.md#tobinary)
- [toJSON](InventoryPartitionRequest.md#tojson)
- [toJson](InventoryPartitionRequest.md#tojson-1)
- [toJsonString](InventoryPartitionRequest.md#tojsonstring)
- [equals](InventoryPartitionRequest.md#equals-1)
- [fromBinary](InventoryPartitionRequest.md#frombinary-1)
- [fromJson](InventoryPartitionRequest.md#fromjson-1)
- [fromJsonString](InventoryPartitionRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new InventoryPartitionRequest**(`data?`): [`InventoryPartitionRequest`](InventoryPartitionRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InventoryPartitionRequest`](InventoryPartitionRequest.md)\> |

#### Returns

[`InventoryPartitionRequest`](InventoryPartitionRequest.md)

#### Overrides

Message\&lt;InventoryPartitionRequest\&gt;.constructor

#### Defined in

src/base.scailo_pb.ts:3577

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

ID of the resource

**`Generated`**

from field: uint64 id = 1;

#### Defined in

src/base.scailo_pb.ts:3554

___

### partitionQuantity

• **partitionQuantity**: `bigint` = `protoInt64.zero`

The primary quantity of the new partition

**`Generated`**

from field: uint64 partition_quantity = 10;

#### Defined in

src/base.scailo_pb.ts:3568

___

### partitionSecondaryQuantity

• **partitionSecondaryQuantity**: `bigint` = `protoInt64.zero`

The secondary quantity of the new partition

**`Generated`**

from field: uint64 partition_secondary_quantity = 11;

#### Defined in

src/base.scailo_pb.ts:3575

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/base.scailo_pb.ts:3561

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/base.scailo_pb.ts:3584

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/base.scailo_pb.ts:3582

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InventoryPartitionRequest"``

#### Defined in

src/base.scailo_pb.ts:3583

## Methods

### clone

▸ **clone**(): [`InventoryPartitionRequest`](InventoryPartitionRequest.md)

Create a deep copy.

#### Returns

[`InventoryPartitionRequest`](InventoryPartitionRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`InventoryPartitionRequest`](InventoryPartitionRequest.md) \| `PlainMessage`\<[`InventoryPartitionRequest`](InventoryPartitionRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`InventoryPartitionRequest`](InventoryPartitionRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InventoryPartitionRequest`](InventoryPartitionRequest.md)\>

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
| `a` | `undefined` \| [`InventoryPartitionRequest`](InventoryPartitionRequest.md) \| `PlainMessage`\<[`InventoryPartitionRequest`](InventoryPartitionRequest.md)\> |
| `b` | `undefined` \| [`InventoryPartitionRequest`](InventoryPartitionRequest.md) \| `PlainMessage`\<[`InventoryPartitionRequest`](InventoryPartitionRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/base.scailo_pb.ts:3603

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InventoryPartitionRequest`](InventoryPartitionRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InventoryPartitionRequest`](InventoryPartitionRequest.md)

#### Defined in

src/base.scailo_pb.ts:3591

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InventoryPartitionRequest`](InventoryPartitionRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InventoryPartitionRequest`](InventoryPartitionRequest.md)

#### Defined in

src/base.scailo_pb.ts:3595

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InventoryPartitionRequest`](InventoryPartitionRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InventoryPartitionRequest`](InventoryPartitionRequest.md)

#### Defined in

src/base.scailo_pb.ts:3599
