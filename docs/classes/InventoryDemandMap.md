[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InventoryDemandMap

# Class: InventoryDemandMap

Describes the message consisting of the demand map

**`Generated`**

from message Scailo.InventoryDemandMap

## Hierarchy

- `Message`\<[`InventoryDemandMap`](InventoryDemandMap.md)\>

  ↳ **`InventoryDemandMap`**

## Table of contents

### Constructors

- [constructor](InventoryDemandMap.md#constructor)

### Properties

- [adjustedDemandList](InventoryDemandMap.md#adjusteddemandlist)
- [adjustedDemandQuantity](InventoryDemandMap.md#adjusteddemandquantity)
- [baseDemandList](InventoryDemandMap.md#basedemandlist)
- [baseDemandQuantity](InventoryDemandMap.md#basedemandquantity)
- [familyId](InventoryDemandMap.md#familyid)
- [isEvaluated](InventoryDemandMap.md#isevaluated)
- [requiredQuantity](InventoryDemandMap.md#requiredquantity)
- [fields](InventoryDemandMap.md#fields)
- [runtime](InventoryDemandMap.md#runtime)
- [typeName](InventoryDemandMap.md#typename)

### Methods

- [clone](InventoryDemandMap.md#clone)
- [equals](InventoryDemandMap.md#equals)
- [fromBinary](InventoryDemandMap.md#frombinary)
- [fromJson](InventoryDemandMap.md#fromjson)
- [fromJsonString](InventoryDemandMap.md#fromjsonstring)
- [getType](InventoryDemandMap.md#gettype)
- [toBinary](InventoryDemandMap.md#tobinary)
- [toJSON](InventoryDemandMap.md#tojson)
- [toJson](InventoryDemandMap.md#tojson-1)
- [toJsonString](InventoryDemandMap.md#tojsonstring)
- [equals](InventoryDemandMap.md#equals-1)
- [fromBinary](InventoryDemandMap.md#frombinary-1)
- [fromJson](InventoryDemandMap.md#fromjson-1)
- [fromJsonString](InventoryDemandMap.md#fromjsonstring-1)

## Constructors

### constructor

• **new InventoryDemandMap**(`data?`): [`InventoryDemandMap`](InventoryDemandMap.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InventoryDemandMap`](InventoryDemandMap.md)\> |

#### Returns

[`InventoryDemandMap`](InventoryDemandMap.md)

#### Overrides

Message\&lt;InventoryDemandMap\&gt;.constructor

#### Defined in

src/inventory.scailo_pb.ts:2149

## Properties

### adjustedDemandList

• **adjustedDemandList**: [`InventoryDemand`](InventoryDemand.md)[] = `[]`

The adjusted demand list

**`Generated`**

from field: repeated Scailo.InventoryDemand adjusted_demand_list = 30;

#### Defined in

src/inventory.scailo_pb.ts:2119

___

### adjustedDemandQuantity

• **adjustedDemandQuantity**: `bigint` = `protoInt64.zero`

The quantity of the adjusted demand (in cents)

**`Generated`**

from field: int64 adjusted_demand_quantity = 50;

#### Defined in

src/inventory.scailo_pb.ts:2133

___

### baseDemandList

• **baseDemandList**: [`InventoryDemand`](InventoryDemand.md)[] = `[]`

The base demand list

**`Generated`**

from field: repeated Scailo.InventoryDemand base_demand_list = 20;

#### Defined in

src/inventory.scailo_pb.ts:2112

___

### baseDemandQuantity

• **baseDemandQuantity**: `bigint` = `protoInt64.zero`

The quantity of the base demand (in cents)

**`Generated`**

from field: int64 base_demand_quantity = 40;

#### Defined in

src/inventory.scailo_pb.ts:2126

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 10;

#### Defined in

src/inventory.scailo_pb.ts:2105

___

### isEvaluated

• **isEvaluated**: `boolean` = `false`

Stores if the item has been evaluated

**`Generated`**

from field: bool is_evaluated = 70;

#### Defined in

src/inventory.scailo_pb.ts:2147

___

### requiredQuantity

• **requiredQuantity**: `bigint` = `protoInt64.zero`

The required quantity of the item (in cents)

**`Generated`**

from field: int64 required_quantity = 60;

#### Defined in

src/inventory.scailo_pb.ts:2140

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inventory.scailo_pb.ts:2156

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inventory.scailo_pb.ts:2154

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InventoryDemandMap"``

#### Defined in

src/inventory.scailo_pb.ts:2155

## Methods

### clone

▸ **clone**(): [`InventoryDemandMap`](InventoryDemandMap.md)

Create a deep copy.

#### Returns

[`InventoryDemandMap`](InventoryDemandMap.md)

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
| `other` | `undefined` \| ``null`` \| [`InventoryDemandMap`](InventoryDemandMap.md) \| `PlainMessage`\<[`InventoryDemandMap`](InventoryDemandMap.md)\> |

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

▸ **getType**(): `MessageType`\<[`InventoryDemandMap`](InventoryDemandMap.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InventoryDemandMap`](InventoryDemandMap.md)\>

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
| `a` | `undefined` \| [`InventoryDemandMap`](InventoryDemandMap.md) \| `PlainMessage`\<[`InventoryDemandMap`](InventoryDemandMap.md)\> |
| `b` | `undefined` \| [`InventoryDemandMap`](InventoryDemandMap.md) \| `PlainMessage`\<[`InventoryDemandMap`](InventoryDemandMap.md)\> |

#### Returns

`boolean`

#### Defined in

src/inventory.scailo_pb.ts:2178

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InventoryDemandMap`](InventoryDemandMap.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InventoryDemandMap`](InventoryDemandMap.md)

#### Defined in

src/inventory.scailo_pb.ts:2166

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InventoryDemandMap`](InventoryDemandMap.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InventoryDemandMap`](InventoryDemandMap.md)

#### Defined in

src/inventory.scailo_pb.ts:2170

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InventoryDemandMap`](InventoryDemandMap.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InventoryDemandMap`](InventoryDemandMap.md)

#### Defined in

src/inventory.scailo_pb.ts:2174
