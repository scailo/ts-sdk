[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchesServiceMultipleItemsSingleton

# Class: GoodsDispatchesServiceMultipleItemsSingleton

Represents a single line item payload within a bulk creation request.
Contains the exact same transactional parameters as a standard item creation request,
omitting the parent goods dispatch ID which is declared once at the batch level.

**`Generated`**

from message Scailo.GoodsDispatchesServiceMultipleItemsSingleton

## Hierarchy

- `Message`\<[`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)\>

  ↳ **`GoodsDispatchesServiceMultipleItemsSingleton`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchesServiceMultipleItemsSingleton.md#constructor)

### Properties

- [clientFamilyCode](GoodsDispatchesServiceMultipleItemsSingleton.md#clientfamilycode)
- [clientQuantity](GoodsDispatchesServiceMultipleItemsSingleton.md#clientquantity)
- [clientUomId](GoodsDispatchesServiceMultipleItemsSingleton.md#clientuomid)
- [familyId](GoodsDispatchesServiceMultipleItemsSingleton.md#familyid)
- [internalQuantity](GoodsDispatchesServiceMultipleItemsSingleton.md#internalquantity)
- [itemHash](GoodsDispatchesServiceMultipleItemsSingleton.md#itemhash)
- [fields](GoodsDispatchesServiceMultipleItemsSingleton.md#fields)
- [runtime](GoodsDispatchesServiceMultipleItemsSingleton.md#runtime)
- [typeName](GoodsDispatchesServiceMultipleItemsSingleton.md#typename)

### Methods

- [clone](GoodsDispatchesServiceMultipleItemsSingleton.md#clone)
- [equals](GoodsDispatchesServiceMultipleItemsSingleton.md#equals)
- [fromBinary](GoodsDispatchesServiceMultipleItemsSingleton.md#frombinary)
- [fromJson](GoodsDispatchesServiceMultipleItemsSingleton.md#fromjson)
- [fromJsonString](GoodsDispatchesServiceMultipleItemsSingleton.md#fromjsonstring)
- [getType](GoodsDispatchesServiceMultipleItemsSingleton.md#gettype)
- [toBinary](GoodsDispatchesServiceMultipleItemsSingleton.md#tobinary)
- [toJSON](GoodsDispatchesServiceMultipleItemsSingleton.md#tojson)
- [toJson](GoodsDispatchesServiceMultipleItemsSingleton.md#tojson-1)
- [toJsonString](GoodsDispatchesServiceMultipleItemsSingleton.md#tojsonstring)
- [equals](GoodsDispatchesServiceMultipleItemsSingleton.md#equals-1)
- [fromBinary](GoodsDispatchesServiceMultipleItemsSingleton.md#frombinary-1)
- [fromJson](GoodsDispatchesServiceMultipleItemsSingleton.md#fromjson-1)
- [fromJsonString](GoodsDispatchesServiceMultipleItemsSingleton.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchesServiceMultipleItemsSingleton**(`data?`): [`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)\> |

#### Returns

[`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)

#### Overrides

Message\&lt;GoodsDispatchesServiceMultipleItemsSingleton\&gt;.constructor

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1228](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L1228)

## Properties

### clientFamilyCode

• `Optional` **clientFamilyCode**: `string`

**`Optional`**

**`Description`**

The client's specific alphanumeric part number, SKU, or family code used for their internal receiving and logistics referencing.

**`Example`**

```ts
"CLI-SKU-992"
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string client_family_code = 16;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1226](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L1226)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The physical quantity being dispatched, represented in the client's specific unit of measure. Stored in subunits to maintain fractional precision.

**`Example`**

```ts
5000
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 client_quantity = 15;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1210](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L1210)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the Unit of Measure (UOM) requested by the client for this dispatched item.

**`Example`**

```ts
12
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 client_uom_id = 14;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1194](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L1194)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the family or catalog item being physically picked and dispatched.

**`Example`**

```ts
505
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1146](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L1146)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The physical quantity being dispatched, represented in the system's internal base unit of measure. Stored in subunits to maintain fractional precision.

**`Example`**

```ts
10000
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1178](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L1178)

___

### itemHash

• **itemHash**: `string` = `""`

**`Mandatory`**

**`Description`**

The cryptographic hash representing the exact inventory instance, batch, or serial pool being dispatched. This guarantees strict traceability of physical goods leaving the facility.

**`Example`**

```ts
"a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2"
```

**`Regex`**

^.{128}$

**`Format`**

Exact 128-character string.

**`Generated`**

from field: string item_hash = 12;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1162](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L1162)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1235](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L1235)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1233](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L1233)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsDispatchesServiceMultipleItemsSingleton"``

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1234](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L1234)

## Methods

### clone

▸ **clone**(): [`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)

Create a deep copy.

#### Returns

[`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)\> |
| `b` | `undefined` \| [`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1256](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L1256)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1244](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L1244)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1248](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L1248)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1252](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L1252)
