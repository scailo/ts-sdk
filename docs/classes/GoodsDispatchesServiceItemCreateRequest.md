[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchesServiceItemCreateRequest

# Class: GoodsDispatchesServiceItemCreateRequest

Request message for appending a physical line item to an existing Goods Dispatch document.
This payload defines the exact product, the specific inventory instance being picked (via its hash),
and the actual quantities being packed and shipped. It acts as the bridge between internal warehouse
metrics and the client's expected units of measure, ensuring strict traceability of goods leaving the facility.

**`Generated`**

from message Scailo.GoodsDispatchesServiceItemCreateRequest

## Hierarchy

- `Message`\<[`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)\>

  ↳ **`GoodsDispatchesServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchesServiceItemCreateRequest.md#constructor)

### Properties

- [clientFamilyCode](GoodsDispatchesServiceItemCreateRequest.md#clientfamilycode)
- [clientQuantity](GoodsDispatchesServiceItemCreateRequest.md#clientquantity)
- [clientUomId](GoodsDispatchesServiceItemCreateRequest.md#clientuomid)
- [familyId](GoodsDispatchesServiceItemCreateRequest.md#familyid)
- [goodsDispatchId](GoodsDispatchesServiceItemCreateRequest.md#goodsdispatchid)
- [internalQuantity](GoodsDispatchesServiceItemCreateRequest.md#internalquantity)
- [itemHash](GoodsDispatchesServiceItemCreateRequest.md#itemhash)
- [userComment](GoodsDispatchesServiceItemCreateRequest.md#usercomment)
- [fields](GoodsDispatchesServiceItemCreateRequest.md#fields)
- [runtime](GoodsDispatchesServiceItemCreateRequest.md#runtime)
- [typeName](GoodsDispatchesServiceItemCreateRequest.md#typename)

### Methods

- [clone](GoodsDispatchesServiceItemCreateRequest.md#clone)
- [equals](GoodsDispatchesServiceItemCreateRequest.md#equals)
- [fromBinary](GoodsDispatchesServiceItemCreateRequest.md#frombinary)
- [fromJson](GoodsDispatchesServiceItemCreateRequest.md#fromjson)
- [fromJsonString](GoodsDispatchesServiceItemCreateRequest.md#fromjsonstring)
- [getType](GoodsDispatchesServiceItemCreateRequest.md#gettype)
- [toBinary](GoodsDispatchesServiceItemCreateRequest.md#tobinary)
- [toJSON](GoodsDispatchesServiceItemCreateRequest.md#tojson)
- [toJson](GoodsDispatchesServiceItemCreateRequest.md#tojson-1)
- [toJsonString](GoodsDispatchesServiceItemCreateRequest.md#tojsonstring)
- [equals](GoodsDispatchesServiceItemCreateRequest.md#equals-1)
- [fromBinary](GoodsDispatchesServiceItemCreateRequest.md#frombinary-1)
- [fromJson](GoodsDispatchesServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](GoodsDispatchesServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchesServiceItemCreateRequest**(`data?`): [`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)\> |

#### Returns

[`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)

#### Overrides

Message\&lt;GoodsDispatchesServiceItemCreateRequest\&gt;.constructor

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1088](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L1088)

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

[src/goods_dispatches.scailo_pb.ts:1086](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L1086)

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

[src/goods_dispatches.scailo_pb.ts:1070](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L1070)

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

[src/goods_dispatches.scailo_pb.ts:1054](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L1054)

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

[src/goods_dispatches.scailo_pb.ts:1006](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L1006)

___

### goodsDispatchId

• **goodsDispatchId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the parent goods dispatch document to which this logistical line item will be attached.

**`Example`**

```ts
1024
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 goods_dispatch_id = 10;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:990](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L990)

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

[src/goods_dispatches.scailo_pb.ts:1038](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L1038)

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

[src/goods_dispatches.scailo_pb.ts:1022](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L1022)

___

### userComment

• `Optional` **userComment**: `string`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string user_comment = 1;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:974](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L974)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1095](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L1095)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1093](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L1093)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsDispatchesServiceItemCreateRequest"``

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1094](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L1094)

## Methods

### clone

▸ **clone**(): [`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md) \| `PlainMessage`\<[`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md) \| `PlainMessage`\<[`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md) \| `PlainMessage`\<[`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1118](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L1118)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1106](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L1106)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1110](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L1110)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1114](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L1114)
