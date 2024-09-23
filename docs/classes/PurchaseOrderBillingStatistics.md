[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseOrderBillingStatistics

# Class: PurchaseOrderBillingStatistics

Describes the parameters that are part of a purchase order's billing statistics payload

**`Generated`**

from message Scailo.PurchaseOrderBillingStatistics

## Hierarchy

- `Message`\<[`PurchaseOrderBillingStatistics`](PurchaseOrderBillingStatistics.md)\>

  ↳ **`PurchaseOrderBillingStatistics`**

## Table of contents

### Constructors

- [constructor](PurchaseOrderBillingStatistics.md#constructor)

### Properties

- [billed](PurchaseOrderBillingStatistics.md#billed)
- [debited](PurchaseOrderBillingStatistics.md#debited)
- [ordered](PurchaseOrderBillingStatistics.md#ordered)
- [fields](PurchaseOrderBillingStatistics.md#fields)
- [runtime](PurchaseOrderBillingStatistics.md#runtime)
- [typeName](PurchaseOrderBillingStatistics.md#typename)

### Methods

- [clone](PurchaseOrderBillingStatistics.md#clone)
- [equals](PurchaseOrderBillingStatistics.md#equals)
- [fromBinary](PurchaseOrderBillingStatistics.md#frombinary)
- [fromJson](PurchaseOrderBillingStatistics.md#fromjson)
- [fromJsonString](PurchaseOrderBillingStatistics.md#fromjsonstring)
- [getType](PurchaseOrderBillingStatistics.md#gettype)
- [toBinary](PurchaseOrderBillingStatistics.md#tobinary)
- [toJSON](PurchaseOrderBillingStatistics.md#tojson)
- [toJson](PurchaseOrderBillingStatistics.md#tojson-1)
- [toJsonString](PurchaseOrderBillingStatistics.md#tojsonstring)
- [equals](PurchaseOrderBillingStatistics.md#equals-1)
- [fromBinary](PurchaseOrderBillingStatistics.md#frombinary-1)
- [fromJson](PurchaseOrderBillingStatistics.md#fromjson-1)
- [fromJsonString](PurchaseOrderBillingStatistics.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseOrderBillingStatistics**(`data?`): [`PurchaseOrderBillingStatistics`](PurchaseOrderBillingStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseOrderBillingStatistics`](PurchaseOrderBillingStatistics.md)\> |

#### Returns

[`PurchaseOrderBillingStatistics`](PurchaseOrderBillingStatistics.md)

#### Overrides

Message\&lt;PurchaseOrderBillingStatistics\&gt;.constructor

#### Defined in

src/purchases_orders.scailo_pb.ts:3226

## Properties

### billed

• **billed**: `bigint` = `protoInt64.zero`

Stores the cumulative quantity of the billed inventory

**`Generated`**

from field: uint64 billed = 2;

#### Defined in

src/purchases_orders.scailo_pb.ts:3217

___

### debited

• **debited**: `bigint` = `protoInt64.zero`

Stores the cumulative quantity of the debited inventory

**`Generated`**

from field: uint64 debited = 3;

#### Defined in

src/purchases_orders.scailo_pb.ts:3224

___

### ordered

• **ordered**: `bigint` = `protoInt64.zero`

Stores the cumulative quantity of the ordered inventory

**`Generated`**

from field: uint64 ordered = 1;

#### Defined in

src/purchases_orders.scailo_pb.ts:3210

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_orders.scailo_pb.ts:3233

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_orders.scailo_pb.ts:3231

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseOrderBillingStatistics"``

#### Defined in

src/purchases_orders.scailo_pb.ts:3232

## Methods

### clone

▸ **clone**(): [`PurchaseOrderBillingStatistics`](PurchaseOrderBillingStatistics.md)

Create a deep copy.

#### Returns

[`PurchaseOrderBillingStatistics`](PurchaseOrderBillingStatistics.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseOrderBillingStatistics`](PurchaseOrderBillingStatistics.md) \| `PlainMessage`\<[`PurchaseOrderBillingStatistics`](PurchaseOrderBillingStatistics.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseOrderBillingStatistics`](PurchaseOrderBillingStatistics.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseOrderBillingStatistics`](PurchaseOrderBillingStatistics.md)\>

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
| `a` | `undefined` \| [`PurchaseOrderBillingStatistics`](PurchaseOrderBillingStatistics.md) \| `PlainMessage`\<[`PurchaseOrderBillingStatistics`](PurchaseOrderBillingStatistics.md)\> |
| `b` | `undefined` \| [`PurchaseOrderBillingStatistics`](PurchaseOrderBillingStatistics.md) \| `PlainMessage`\<[`PurchaseOrderBillingStatistics`](PurchaseOrderBillingStatistics.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_orders.scailo_pb.ts:3251

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseOrderBillingStatistics`](PurchaseOrderBillingStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseOrderBillingStatistics`](PurchaseOrderBillingStatistics.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:3239

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseOrderBillingStatistics`](PurchaseOrderBillingStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderBillingStatistics`](PurchaseOrderBillingStatistics.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:3243

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseOrderBillingStatistics`](PurchaseOrderBillingStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderBillingStatistics`](PurchaseOrderBillingStatistics.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:3247
