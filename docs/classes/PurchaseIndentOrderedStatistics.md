[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseIndentOrderedStatistics

# Class: PurchaseIndentOrderedStatistics

Describes the ordered statistics of the purchase indent

**`Generated`**

from message Scailo.PurchaseIndentOrderedStatistics

## Hierarchy

- `Message`\<[`PurchaseIndentOrderedStatistics`](PurchaseIndentOrderedStatistics.md)\>

  ↳ **`PurchaseIndentOrderedStatistics`**

## Table of contents

### Constructors

- [constructor](PurchaseIndentOrderedStatistics.md#constructor)

### Properties

- [familyId](PurchaseIndentOrderedStatistics.md#familyid)
- [indentedQuantity](PurchaseIndentOrderedStatistics.md#indentedquantity)
- [orderedQuantity](PurchaseIndentOrderedStatistics.md#orderedquantity)
- [fields](PurchaseIndentOrderedStatistics.md#fields)
- [runtime](PurchaseIndentOrderedStatistics.md#runtime)
- [typeName](PurchaseIndentOrderedStatistics.md#typename)

### Methods

- [clone](PurchaseIndentOrderedStatistics.md#clone)
- [equals](PurchaseIndentOrderedStatistics.md#equals)
- [fromBinary](PurchaseIndentOrderedStatistics.md#frombinary)
- [fromJson](PurchaseIndentOrderedStatistics.md#fromjson)
- [fromJsonString](PurchaseIndentOrderedStatistics.md#fromjsonstring)
- [getType](PurchaseIndentOrderedStatistics.md#gettype)
- [toBinary](PurchaseIndentOrderedStatistics.md#tobinary)
- [toJSON](PurchaseIndentOrderedStatistics.md#tojson)
- [toJson](PurchaseIndentOrderedStatistics.md#tojson-1)
- [toJsonString](PurchaseIndentOrderedStatistics.md#tojsonstring)
- [equals](PurchaseIndentOrderedStatistics.md#equals-1)
- [fromBinary](PurchaseIndentOrderedStatistics.md#frombinary-1)
- [fromJson](PurchaseIndentOrderedStatistics.md#fromjson-1)
- [fromJsonString](PurchaseIndentOrderedStatistics.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseIndentOrderedStatistics**(`data?`): [`PurchaseIndentOrderedStatistics`](PurchaseIndentOrderedStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseIndentOrderedStatistics`](PurchaseIndentOrderedStatistics.md)\> |

#### Returns

[`PurchaseIndentOrderedStatistics`](PurchaseIndentOrderedStatistics.md)

#### Overrides

Message\&lt;PurchaseIndentOrderedStatistics\&gt;.constructor

#### Defined in

src/purchases_indents.scailo_pb.ts:2080

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the family

**`Generated`**

from field: uint64 family_id = 1;

#### Defined in

src/purchases_indents.scailo_pb.ts:2064

___

### indentedQuantity

• **indentedQuantity**: `bigint` = `protoInt64.zero`

Stores the indented quantity

**`Generated`**

from field: uint64 indented_quantity = 2;

#### Defined in

src/purchases_indents.scailo_pb.ts:2071

___

### orderedQuantity

• **orderedQuantity**: `bigint` = `protoInt64.zero`

Stores the ordered quantity

**`Generated`**

from field: uint64 ordered_quantity = 3;

#### Defined in

src/purchases_indents.scailo_pb.ts:2078

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_indents.scailo_pb.ts:2087

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_indents.scailo_pb.ts:2085

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseIndentOrderedStatistics"``

#### Defined in

src/purchases_indents.scailo_pb.ts:2086

## Methods

### clone

▸ **clone**(): [`PurchaseIndentOrderedStatistics`](PurchaseIndentOrderedStatistics.md)

Create a deep copy.

#### Returns

[`PurchaseIndentOrderedStatistics`](PurchaseIndentOrderedStatistics.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseIndentOrderedStatistics`](PurchaseIndentOrderedStatistics.md) \| `PlainMessage`\<[`PurchaseIndentOrderedStatistics`](PurchaseIndentOrderedStatistics.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseIndentOrderedStatistics`](PurchaseIndentOrderedStatistics.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseIndentOrderedStatistics`](PurchaseIndentOrderedStatistics.md)\>

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
| `a` | `undefined` \| [`PurchaseIndentOrderedStatistics`](PurchaseIndentOrderedStatistics.md) \| `PlainMessage`\<[`PurchaseIndentOrderedStatistics`](PurchaseIndentOrderedStatistics.md)\> |
| `b` | `undefined` \| [`PurchaseIndentOrderedStatistics`](PurchaseIndentOrderedStatistics.md) \| `PlainMessage`\<[`PurchaseIndentOrderedStatistics`](PurchaseIndentOrderedStatistics.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_indents.scailo_pb.ts:2105

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseIndentOrderedStatistics`](PurchaseIndentOrderedStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseIndentOrderedStatistics`](PurchaseIndentOrderedStatistics.md)

#### Defined in

src/purchases_indents.scailo_pb.ts:2093

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseIndentOrderedStatistics`](PurchaseIndentOrderedStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseIndentOrderedStatistics`](PurchaseIndentOrderedStatistics.md)

#### Defined in

src/purchases_indents.scailo_pb.ts:2097

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseIndentOrderedStatistics`](PurchaseIndentOrderedStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseIndentOrderedStatistics`](PurchaseIndentOrderedStatistics.md)

#### Defined in

src/purchases_indents.scailo_pb.ts:2101
