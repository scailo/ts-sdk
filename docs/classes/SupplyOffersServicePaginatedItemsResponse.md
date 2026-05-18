[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SupplyOffersServicePaginatedItemsResponse

# Class: SupplyOffersServicePaginatedItemsResponse

Describes the response to a pagination items request

**`Generated`**

from message Scailo.SupplyOffersServicePaginatedItemsResponse

## Hierarchy

- `Message`\<[`SupplyOffersServicePaginatedItemsResponse`](SupplyOffersServicePaginatedItemsResponse.md)\>

  ↳ **`SupplyOffersServicePaginatedItemsResponse`**

## Table of contents

### Constructors

- [constructor](SupplyOffersServicePaginatedItemsResponse.md#constructor)

### Properties

- [count](SupplyOffersServicePaginatedItemsResponse.md#count)
- [offset](SupplyOffersServicePaginatedItemsResponse.md#offset)
- [payload](SupplyOffersServicePaginatedItemsResponse.md#payload)
- [total](SupplyOffersServicePaginatedItemsResponse.md#total)
- [fields](SupplyOffersServicePaginatedItemsResponse.md#fields)
- [runtime](SupplyOffersServicePaginatedItemsResponse.md#runtime)
- [typeName](SupplyOffersServicePaginatedItemsResponse.md#typename)

### Methods

- [clone](SupplyOffersServicePaginatedItemsResponse.md#clone)
- [equals](SupplyOffersServicePaginatedItemsResponse.md#equals)
- [fromBinary](SupplyOffersServicePaginatedItemsResponse.md#frombinary)
- [fromJson](SupplyOffersServicePaginatedItemsResponse.md#fromjson)
- [fromJsonString](SupplyOffersServicePaginatedItemsResponse.md#fromjsonstring)
- [getType](SupplyOffersServicePaginatedItemsResponse.md#gettype)
- [toBinary](SupplyOffersServicePaginatedItemsResponse.md#tobinary)
- [toJSON](SupplyOffersServicePaginatedItemsResponse.md#tojson)
- [toJson](SupplyOffersServicePaginatedItemsResponse.md#tojson-1)
- [toJsonString](SupplyOffersServicePaginatedItemsResponse.md#tojsonstring)
- [equals](SupplyOffersServicePaginatedItemsResponse.md#equals-1)
- [fromBinary](SupplyOffersServicePaginatedItemsResponse.md#frombinary-1)
- [fromJson](SupplyOffersServicePaginatedItemsResponse.md#fromjson-1)
- [fromJsonString](SupplyOffersServicePaginatedItemsResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new SupplyOffersServicePaginatedItemsResponse**(`data?`): [`SupplyOffersServicePaginatedItemsResponse`](SupplyOffersServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SupplyOffersServicePaginatedItemsResponse`](SupplyOffersServicePaginatedItemsResponse.md)\> |

#### Returns

[`SupplyOffersServicePaginatedItemsResponse`](SupplyOffersServicePaginatedItemsResponse.md)

#### Overrides

Message\&lt;SupplyOffersServicePaginatedItemsResponse\&gt;.constructor

#### Defined in

[src/supply_offers.scailo_pb.ts:3135](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L3135)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Description`**

Number of records returned in the current response slice.

**`Example`**

```ts
50
```

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/supply_offers.scailo_pb.ts:3105](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L3105)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Description`**

The offset provided in the request.

**`Example`**

```ts
0
```

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/supply_offers.scailo_pb.ts:3115](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L3115)

___

### payload

• **payload**: [`SupplyOfferItem`](SupplyOfferItem.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.SupplyOfferItem payload = 4;

#### Defined in

[src/supply_offers.scailo_pb.ts:3133](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L3133)

___

### total

• **total**: `bigint` = `protoInt64.zero`

**`Description`**

The total number of records matching the criteria.

**`Example`**

```ts
1250
```

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/supply_offers.scailo_pb.ts:3125](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L3125)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/supply_offers.scailo_pb.ts:3142](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L3142)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/supply_offers.scailo_pb.ts:3140](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L3140)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SupplyOffersServicePaginatedItemsResponse"``

#### Defined in

[src/supply_offers.scailo_pb.ts:3141](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L3141)

## Methods

### clone

▸ **clone**(): [`SupplyOffersServicePaginatedItemsResponse`](SupplyOffersServicePaginatedItemsResponse.md)

Create a deep copy.

#### Returns

[`SupplyOffersServicePaginatedItemsResponse`](SupplyOffersServicePaginatedItemsResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`SupplyOffersServicePaginatedItemsResponse`](SupplyOffersServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`SupplyOffersServicePaginatedItemsResponse`](SupplyOffersServicePaginatedItemsResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`SupplyOffersServicePaginatedItemsResponse`](SupplyOffersServicePaginatedItemsResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SupplyOffersServicePaginatedItemsResponse`](SupplyOffersServicePaginatedItemsResponse.md)\>

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
| `a` | `undefined` \| [`SupplyOffersServicePaginatedItemsResponse`](SupplyOffersServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`SupplyOffersServicePaginatedItemsResponse`](SupplyOffersServicePaginatedItemsResponse.md)\> |
| `b` | `undefined` \| [`SupplyOffersServicePaginatedItemsResponse`](SupplyOffersServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`SupplyOffersServicePaginatedItemsResponse`](SupplyOffersServicePaginatedItemsResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/supply_offers.scailo_pb.ts:3161](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L3161)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SupplyOffersServicePaginatedItemsResponse`](SupplyOffersServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SupplyOffersServicePaginatedItemsResponse`](SupplyOffersServicePaginatedItemsResponse.md)

#### Defined in

[src/supply_offers.scailo_pb.ts:3149](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L3149)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SupplyOffersServicePaginatedItemsResponse`](SupplyOffersServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOffersServicePaginatedItemsResponse`](SupplyOffersServicePaginatedItemsResponse.md)

#### Defined in

[src/supply_offers.scailo_pb.ts:3153](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L3153)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SupplyOffersServicePaginatedItemsResponse`](SupplyOffersServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOffersServicePaginatedItemsResponse`](SupplyOffersServicePaginatedItemsResponse.md)

#### Defined in

[src/supply_offers.scailo_pb.ts:3157](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L3157)
