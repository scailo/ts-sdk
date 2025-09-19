[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InventoryServiceFamilyQuantityReq

# Class: InventoryServiceFamilyQuantityReq

Describes the request to calculate the quantity remaining for the given family in a particular status

**`Generated`**

from message Scailo.InventoryServiceFamilyQuantityReq

## Hierarchy

- `Message`\<[`InventoryServiceFamilyQuantityReq`](InventoryServiceFamilyQuantityReq.md)\>

  ↳ **`InventoryServiceFamilyQuantityReq`**

## Table of contents

### Constructors

- [constructor](InventoryServiceFamilyQuantityReq.md#constructor)

### Properties

- [familyId](InventoryServiceFamilyQuantityReq.md#familyid)
- [status](InventoryServiceFamilyQuantityReq.md#status)
- [fields](InventoryServiceFamilyQuantityReq.md#fields)
- [runtime](InventoryServiceFamilyQuantityReq.md#runtime)
- [typeName](InventoryServiceFamilyQuantityReq.md#typename)

### Methods

- [clone](InventoryServiceFamilyQuantityReq.md#clone)
- [equals](InventoryServiceFamilyQuantityReq.md#equals)
- [fromBinary](InventoryServiceFamilyQuantityReq.md#frombinary)
- [fromJson](InventoryServiceFamilyQuantityReq.md#fromjson)
- [fromJsonString](InventoryServiceFamilyQuantityReq.md#fromjsonstring)
- [getType](InventoryServiceFamilyQuantityReq.md#gettype)
- [toBinary](InventoryServiceFamilyQuantityReq.md#tobinary)
- [toJSON](InventoryServiceFamilyQuantityReq.md#tojson)
- [toJson](InventoryServiceFamilyQuantityReq.md#tojson-1)
- [toJsonString](InventoryServiceFamilyQuantityReq.md#tojsonstring)
- [equals](InventoryServiceFamilyQuantityReq.md#equals-1)
- [fromBinary](InventoryServiceFamilyQuantityReq.md#frombinary-1)
- [fromJson](InventoryServiceFamilyQuantityReq.md#fromjson-1)
- [fromJsonString](InventoryServiceFamilyQuantityReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new InventoryServiceFamilyQuantityReq**(`data?`): [`InventoryServiceFamilyQuantityReq`](InventoryServiceFamilyQuantityReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InventoryServiceFamilyQuantityReq`](InventoryServiceFamilyQuantityReq.md)\> |

#### Returns

[`InventoryServiceFamilyQuantityReq`](InventoryServiceFamilyQuantityReq.md)

#### Overrides

Message\&lt;InventoryServiceFamilyQuantityReq\&gt;.constructor

#### Defined in

[src/inventory.scailo_pb.ts:768](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L768)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family

**`Generated`**

from field: uint64 family_id = 20;

#### Defined in

[src/inventory.scailo_pb.ts:766](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L766)

___

### status

• **status**: [`INVENTORY_LIFECYCLE`](../enums/INVENTORY_LIFECYCLE.md) = `INVENTORY_LIFECYCLE.INVENTORY_LIFECYCLE_ANY_UNSPECIFIED`

The status of this inventory item

**`Generated`**

from field: Scailo.INVENTORY_LIFECYCLE status = 10;

#### Defined in

[src/inventory.scailo_pb.ts:759](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L759)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inventory.scailo_pb.ts:775](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L775)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inventory.scailo_pb.ts:773](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L773)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InventoryServiceFamilyQuantityReq"``

#### Defined in

[src/inventory.scailo_pb.ts:774](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L774)

## Methods

### clone

▸ **clone**(): [`InventoryServiceFamilyQuantityReq`](InventoryServiceFamilyQuantityReq.md)

Create a deep copy.

#### Returns

[`InventoryServiceFamilyQuantityReq`](InventoryServiceFamilyQuantityReq.md)

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
| `other` | `undefined` \| ``null`` \| [`InventoryServiceFamilyQuantityReq`](InventoryServiceFamilyQuantityReq.md) \| `PlainMessage`\<[`InventoryServiceFamilyQuantityReq`](InventoryServiceFamilyQuantityReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`InventoryServiceFamilyQuantityReq`](InventoryServiceFamilyQuantityReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InventoryServiceFamilyQuantityReq`](InventoryServiceFamilyQuantityReq.md)\>

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
| `a` | `undefined` \| [`InventoryServiceFamilyQuantityReq`](InventoryServiceFamilyQuantityReq.md) \| `PlainMessage`\<[`InventoryServiceFamilyQuantityReq`](InventoryServiceFamilyQuantityReq.md)\> |
| `b` | `undefined` \| [`InventoryServiceFamilyQuantityReq`](InventoryServiceFamilyQuantityReq.md) \| `PlainMessage`\<[`InventoryServiceFamilyQuantityReq`](InventoryServiceFamilyQuantityReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inventory.scailo_pb.ts:792](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L792)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InventoryServiceFamilyQuantityReq`](InventoryServiceFamilyQuantityReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InventoryServiceFamilyQuantityReq`](InventoryServiceFamilyQuantityReq.md)

#### Defined in

[src/inventory.scailo_pb.ts:780](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L780)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InventoryServiceFamilyQuantityReq`](InventoryServiceFamilyQuantityReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InventoryServiceFamilyQuantityReq`](InventoryServiceFamilyQuantityReq.md)

#### Defined in

[src/inventory.scailo_pb.ts:784](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L784)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InventoryServiceFamilyQuantityReq`](InventoryServiceFamilyQuantityReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InventoryServiceFamilyQuantityReq`](InventoryServiceFamilyQuantityReq.md)

#### Defined in

[src/inventory.scailo_pb.ts:788](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L788)
