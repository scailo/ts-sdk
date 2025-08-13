[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InventoryDetailedDemand

# Class: InventoryDetailedDemand

Describes the message consisting of the detailed demand statistics for the given family ID

**`Generated`**

from message Scailo.InventoryDetailedDemand

## Hierarchy

- `Message`\<[`InventoryDetailedDemand`](InventoryDetailedDemand.md)\>

  ↳ **`InventoryDetailedDemand`**

## Table of contents

### Constructors

- [constructor](InventoryDetailedDemand.md#constructor)

### Properties

- [adjustedDemandQuantity](InventoryDetailedDemand.md#adjusteddemandquantity)
- [baseDemandQuantity](InventoryDetailedDemand.md#basedemandquantity)
- [createdAt](InventoryDetailedDemand.md#createdat)
- [demandMap](InventoryDetailedDemand.md#demandmap)
- [familyId](InventoryDetailedDemand.md#familyid)
- [id](InventoryDetailedDemand.md#id)
- [isActive](InventoryDetailedDemand.md#isactive)
- [requiredQuantity](InventoryDetailedDemand.md#requiredquantity)
- [uuid](InventoryDetailedDemand.md#uuid)
- [fields](InventoryDetailedDemand.md#fields)
- [runtime](InventoryDetailedDemand.md#runtime)
- [typeName](InventoryDetailedDemand.md#typename)

### Methods

- [clone](InventoryDetailedDemand.md#clone)
- [equals](InventoryDetailedDemand.md#equals)
- [fromBinary](InventoryDetailedDemand.md#frombinary)
- [fromJson](InventoryDetailedDemand.md#fromjson)
- [fromJsonString](InventoryDetailedDemand.md#fromjsonstring)
- [getType](InventoryDetailedDemand.md#gettype)
- [toBinary](InventoryDetailedDemand.md#tobinary)
- [toJSON](InventoryDetailedDemand.md#tojson)
- [toJson](InventoryDetailedDemand.md#tojson-1)
- [toJsonString](InventoryDetailedDemand.md#tojsonstring)
- [equals](InventoryDetailedDemand.md#equals-1)
- [fromBinary](InventoryDetailedDemand.md#frombinary-1)
- [fromJson](InventoryDetailedDemand.md#fromjson-1)
- [fromJsonString](InventoryDetailedDemand.md#fromjsonstring-1)

## Constructors

### constructor

• **new InventoryDetailedDemand**(`data?`): [`InventoryDetailedDemand`](InventoryDetailedDemand.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InventoryDetailedDemand`](InventoryDetailedDemand.md)\> |

#### Returns

[`InventoryDetailedDemand`](InventoryDetailedDemand.md)

#### Overrides

Message\&lt;InventoryDetailedDemand\&gt;.constructor

#### Defined in

src/inventory.scailo_pb.ts:2057

## Properties

### adjustedDemandQuantity

• **adjustedDemandQuantity**: `bigint` = `protoInt64.zero`

The adjusted demand quantity of the item (in cents)

**`Generated`**

from field: int64 adjusted_demand_quantity = 30;

#### Defined in

src/inventory.scailo_pb.ts:2027

___

### baseDemandQuantity

• **baseDemandQuantity**: `bigint` = `protoInt64.zero`

The base demand quantity of the item (in cents)

**`Generated`**

from field: int64 base_demand_quantity = 20;

#### Defined in

src/inventory.scailo_pb.ts:2020

___

### createdAt

• **createdAt**: `bigint` = `protoInt64.zero`

Stores the timestamp of when the resource was created

**`Generated`**

from field: uint64 created_at = 70;

#### Defined in

src/inventory.scailo_pb.ts:2055

___

### demandMap

• `Optional` **demandMap**: [`InventoryDemandMap`](InventoryDemandMap.md)

The map of the demand

**`Generated`**

from field: Scailo.InventoryDemandMap demand_map = 50;

#### Defined in

src/inventory.scailo_pb.ts:2041

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 10;

#### Defined in

src/inventory.scailo_pb.ts:2013

___

### id

• **id**: `bigint` = `protoInt64.zero`

ID of the resource

**`Generated`**

from field: uint64 id = 1;

#### Defined in

src/inventory.scailo_pb.ts:1999

___

### isActive

• **isActive**: `boolean` = `false`

Represents if the resource is active

**`Generated`**

from field: bool is_active = 60;

#### Defined in

src/inventory.scailo_pb.ts:2048

___

### requiredQuantity

• **requiredQuantity**: `bigint` = `protoInt64.zero`

The required quantity of the item (in cents)

**`Generated`**

from field: int64 required_quantity = 40;

#### Defined in

src/inventory.scailo_pb.ts:2034

___

### uuid

• **uuid**: `string` = `""`

UUID of the resource

**`Generated`**

from field: string uuid = 2;

#### Defined in

src/inventory.scailo_pb.ts:2006

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inventory.scailo_pb.ts:2064

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inventory.scailo_pb.ts:2062

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InventoryDetailedDemand"``

#### Defined in

src/inventory.scailo_pb.ts:2063

## Methods

### clone

▸ **clone**(): [`InventoryDetailedDemand`](InventoryDetailedDemand.md)

Create a deep copy.

#### Returns

[`InventoryDetailedDemand`](InventoryDetailedDemand.md)

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
| `other` | `undefined` \| ``null`` \| [`InventoryDetailedDemand`](InventoryDetailedDemand.md) \| `PlainMessage`\<[`InventoryDetailedDemand`](InventoryDetailedDemand.md)\> |

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

▸ **getType**(): `MessageType`\<[`InventoryDetailedDemand`](InventoryDetailedDemand.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InventoryDetailedDemand`](InventoryDetailedDemand.md)\>

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
| `a` | `undefined` \| [`InventoryDetailedDemand`](InventoryDetailedDemand.md) \| `PlainMessage`\<[`InventoryDetailedDemand`](InventoryDetailedDemand.md)\> |
| `b` | `undefined` \| [`InventoryDetailedDemand`](InventoryDetailedDemand.md) \| `PlainMessage`\<[`InventoryDetailedDemand`](InventoryDetailedDemand.md)\> |

#### Returns

`boolean`

#### Defined in

src/inventory.scailo_pb.ts:2088

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InventoryDetailedDemand`](InventoryDetailedDemand.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InventoryDetailedDemand`](InventoryDetailedDemand.md)

#### Defined in

src/inventory.scailo_pb.ts:2076

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InventoryDetailedDemand`](InventoryDetailedDemand.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InventoryDetailedDemand`](InventoryDetailedDemand.md)

#### Defined in

src/inventory.scailo_pb.ts:2080

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InventoryDetailedDemand`](InventoryDetailedDemand.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InventoryDetailedDemand`](InventoryDetailedDemand.md)

#### Defined in

src/inventory.scailo_pb.ts:2084
