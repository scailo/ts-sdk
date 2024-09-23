[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseOrderInventoryStatistics

# Class: PurchaseOrderInventoryStatistics

Describes the parameters that are part of a purchase order's inventory statistics payload

**`Generated`**

from message Scailo.PurchaseOrderInventoryStatistics

## Hierarchy

- `Message`\<[`PurchaseOrderInventoryStatistics`](PurchaseOrderInventoryStatistics.md)\>

  ↳ **`PurchaseOrderInventoryStatistics`**

## Table of contents

### Constructors

- [constructor](PurchaseOrderInventoryStatistics.md#constructor)

### Properties

- [ordered](PurchaseOrderInventoryStatistics.md#ordered)
- [received](PurchaseOrderInventoryStatistics.md#received)
- [returned](PurchaseOrderInventoryStatistics.md#returned)
- [fields](PurchaseOrderInventoryStatistics.md#fields)
- [runtime](PurchaseOrderInventoryStatistics.md#runtime)
- [typeName](PurchaseOrderInventoryStatistics.md#typename)

### Methods

- [clone](PurchaseOrderInventoryStatistics.md#clone)
- [equals](PurchaseOrderInventoryStatistics.md#equals)
- [fromBinary](PurchaseOrderInventoryStatistics.md#frombinary)
- [fromJson](PurchaseOrderInventoryStatistics.md#fromjson)
- [fromJsonString](PurchaseOrderInventoryStatistics.md#fromjsonstring)
- [getType](PurchaseOrderInventoryStatistics.md#gettype)
- [toBinary](PurchaseOrderInventoryStatistics.md#tobinary)
- [toJSON](PurchaseOrderInventoryStatistics.md#tojson)
- [toJson](PurchaseOrderInventoryStatistics.md#tojson-1)
- [toJsonString](PurchaseOrderInventoryStatistics.md#tojsonstring)
- [equals](PurchaseOrderInventoryStatistics.md#equals-1)
- [fromBinary](PurchaseOrderInventoryStatistics.md#frombinary-1)
- [fromJson](PurchaseOrderInventoryStatistics.md#fromjson-1)
- [fromJsonString](PurchaseOrderInventoryStatistics.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseOrderInventoryStatistics**(`data?`): [`PurchaseOrderInventoryStatistics`](PurchaseOrderInventoryStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseOrderInventoryStatistics`](PurchaseOrderInventoryStatistics.md)\> |

#### Returns

[`PurchaseOrderInventoryStatistics`](PurchaseOrderInventoryStatistics.md)

#### Overrides

Message\&lt;PurchaseOrderInventoryStatistics\&gt;.constructor

#### Defined in

src/purchases_orders.scailo_pb.ts:3168

## Properties

### ordered

• **ordered**: `bigint` = `protoInt64.zero`

Stores the cumulative quantity of the ordered inventory

**`Generated`**

from field: uint64 ordered = 1;

#### Defined in

src/purchases_orders.scailo_pb.ts:3152

___

### received

• **received**: `bigint` = `protoInt64.zero`

Stores the cumulative quantity of the received inventory

**`Generated`**

from field: uint64 received = 2;

#### Defined in

src/purchases_orders.scailo_pb.ts:3159

___

### returned

• **returned**: `bigint` = `protoInt64.zero`

Stores the cumulative quantity of the returned inventory

**`Generated`**

from field: uint64 returned = 3;

#### Defined in

src/purchases_orders.scailo_pb.ts:3166

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_orders.scailo_pb.ts:3175

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_orders.scailo_pb.ts:3173

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseOrderInventoryStatistics"``

#### Defined in

src/purchases_orders.scailo_pb.ts:3174

## Methods

### clone

▸ **clone**(): [`PurchaseOrderInventoryStatistics`](PurchaseOrderInventoryStatistics.md)

Create a deep copy.

#### Returns

[`PurchaseOrderInventoryStatistics`](PurchaseOrderInventoryStatistics.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseOrderInventoryStatistics`](PurchaseOrderInventoryStatistics.md) \| `PlainMessage`\<[`PurchaseOrderInventoryStatistics`](PurchaseOrderInventoryStatistics.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseOrderInventoryStatistics`](PurchaseOrderInventoryStatistics.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseOrderInventoryStatistics`](PurchaseOrderInventoryStatistics.md)\>

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
| `a` | `undefined` \| [`PurchaseOrderInventoryStatistics`](PurchaseOrderInventoryStatistics.md) \| `PlainMessage`\<[`PurchaseOrderInventoryStatistics`](PurchaseOrderInventoryStatistics.md)\> |
| `b` | `undefined` \| [`PurchaseOrderInventoryStatistics`](PurchaseOrderInventoryStatistics.md) \| `PlainMessage`\<[`PurchaseOrderInventoryStatistics`](PurchaseOrderInventoryStatistics.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_orders.scailo_pb.ts:3193

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseOrderInventoryStatistics`](PurchaseOrderInventoryStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseOrderInventoryStatistics`](PurchaseOrderInventoryStatistics.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:3181

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseOrderInventoryStatistics`](PurchaseOrderInventoryStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderInventoryStatistics`](PurchaseOrderInventoryStatistics.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:3185

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseOrderInventoryStatistics`](PurchaseOrderInventoryStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderInventoryStatistics`](PurchaseOrderInventoryStatistics.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:3189
