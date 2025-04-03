[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / WorkOrderRequirementStatistics

# Class: WorkOrderRequirementStatistics

Describes the requirement statistics of the work order

**`Generated`**

from message Scailo.WorkOrderRequirementStatistics

## Hierarchy

- `Message`\<[`WorkOrderRequirementStatistics`](WorkOrderRequirementStatistics.md)\>

  ↳ **`WorkOrderRequirementStatistics`**

## Table of contents

### Constructors

- [constructor](WorkOrderRequirementStatistics.md#constructor)

### Properties

- [familyId](WorkOrderRequirementStatistics.md#familyid)
- [salesOrderQuantity](WorkOrderRequirementStatistics.md#salesorderquantity)
- [workOrderQuantity](WorkOrderRequirementStatistics.md#workorderquantity)
- [fields](WorkOrderRequirementStatistics.md#fields)
- [runtime](WorkOrderRequirementStatistics.md#runtime)
- [typeName](WorkOrderRequirementStatistics.md#typename)

### Methods

- [clone](WorkOrderRequirementStatistics.md#clone)
- [equals](WorkOrderRequirementStatistics.md#equals)
- [fromBinary](WorkOrderRequirementStatistics.md#frombinary)
- [fromJson](WorkOrderRequirementStatistics.md#fromjson)
- [fromJsonString](WorkOrderRequirementStatistics.md#fromjsonstring)
- [getType](WorkOrderRequirementStatistics.md#gettype)
- [toBinary](WorkOrderRequirementStatistics.md#tobinary)
- [toJSON](WorkOrderRequirementStatistics.md#tojson)
- [toJson](WorkOrderRequirementStatistics.md#tojson-1)
- [toJsonString](WorkOrderRequirementStatistics.md#tojsonstring)
- [equals](WorkOrderRequirementStatistics.md#equals-1)
- [fromBinary](WorkOrderRequirementStatistics.md#frombinary-1)
- [fromJson](WorkOrderRequirementStatistics.md#fromjson-1)
- [fromJsonString](WorkOrderRequirementStatistics.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkOrderRequirementStatistics**(`data?`): [`WorkOrderRequirementStatistics`](WorkOrderRequirementStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`WorkOrderRequirementStatistics`](WorkOrderRequirementStatistics.md)\> |

#### Returns

[`WorkOrderRequirementStatistics`](WorkOrderRequirementStatistics.md)

#### Overrides

Message\&lt;WorkOrderRequirementStatistics\&gt;.constructor

#### Defined in

src/work_orders.scailo_pb.ts:2147

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the family

**`Generated`**

from field: uint64 family_id = 1;

#### Defined in

src/work_orders.scailo_pb.ts:2131

___

### salesOrderQuantity

• **salesOrderQuantity**: `bigint` = `protoInt64.zero`

Stores the sales order quantity

**`Generated`**

from field: uint64 sales_order_quantity = 2;

#### Defined in

src/work_orders.scailo_pb.ts:2138

___

### workOrderQuantity

• **workOrderQuantity**: `bigint` = `protoInt64.zero`

Stores the work order quantity

**`Generated`**

from field: uint64 work_order_quantity = 3;

#### Defined in

src/work_orders.scailo_pb.ts:2145

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/work_orders.scailo_pb.ts:2154

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/work_orders.scailo_pb.ts:2152

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.WorkOrderRequirementStatistics"``

#### Defined in

src/work_orders.scailo_pb.ts:2153

## Methods

### clone

▸ **clone**(): [`WorkOrderRequirementStatistics`](WorkOrderRequirementStatistics.md)

Create a deep copy.

#### Returns

[`WorkOrderRequirementStatistics`](WorkOrderRequirementStatistics.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkOrderRequirementStatistics`](WorkOrderRequirementStatistics.md) \| `PlainMessage`\<[`WorkOrderRequirementStatistics`](WorkOrderRequirementStatistics.md)\> |

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

▸ **getType**(): `MessageType`\<[`WorkOrderRequirementStatistics`](WorkOrderRequirementStatistics.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`WorkOrderRequirementStatistics`](WorkOrderRequirementStatistics.md)\>

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
| `a` | `undefined` \| [`WorkOrderRequirementStatistics`](WorkOrderRequirementStatistics.md) \| `PlainMessage`\<[`WorkOrderRequirementStatistics`](WorkOrderRequirementStatistics.md)\> |
| `b` | `undefined` \| [`WorkOrderRequirementStatistics`](WorkOrderRequirementStatistics.md) \| `PlainMessage`\<[`WorkOrderRequirementStatistics`](WorkOrderRequirementStatistics.md)\> |

#### Returns

`boolean`

#### Defined in

src/work_orders.scailo_pb.ts:2172

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkOrderRequirementStatistics`](WorkOrderRequirementStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`WorkOrderRequirementStatistics`](WorkOrderRequirementStatistics.md)

#### Defined in

src/work_orders.scailo_pb.ts:2160

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkOrderRequirementStatistics`](WorkOrderRequirementStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrderRequirementStatistics`](WorkOrderRequirementStatistics.md)

#### Defined in

src/work_orders.scailo_pb.ts:2164

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkOrderRequirementStatistics`](WorkOrderRequirementStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrderRequirementStatistics`](WorkOrderRequirementStatistics.md)

#### Defined in

src/work_orders.scailo_pb.ts:2168
