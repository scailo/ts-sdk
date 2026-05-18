[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsSalesBundlesServicePaginatedItemsResponse

# Class: EquationsSalesBundlesServicePaginatedItemsResponse

Describes the response to a pagination items request

**`Generated`**

from message Scailo.EquationsSalesBundlesServicePaginatedItemsResponse

## Hierarchy

- `Message`\<[`EquationsSalesBundlesServicePaginatedItemsResponse`](EquationsSalesBundlesServicePaginatedItemsResponse.md)\>

  ↳ **`EquationsSalesBundlesServicePaginatedItemsResponse`**

## Table of contents

### Constructors

- [constructor](EquationsSalesBundlesServicePaginatedItemsResponse.md#constructor)

### Properties

- [count](EquationsSalesBundlesServicePaginatedItemsResponse.md#count)
- [offset](EquationsSalesBundlesServicePaginatedItemsResponse.md#offset)
- [payload](EquationsSalesBundlesServicePaginatedItemsResponse.md#payload)
- [total](EquationsSalesBundlesServicePaginatedItemsResponse.md#total)
- [fields](EquationsSalesBundlesServicePaginatedItemsResponse.md#fields)
- [runtime](EquationsSalesBundlesServicePaginatedItemsResponse.md#runtime)
- [typeName](EquationsSalesBundlesServicePaginatedItemsResponse.md#typename)

### Methods

- [clone](EquationsSalesBundlesServicePaginatedItemsResponse.md#clone)
- [equals](EquationsSalesBundlesServicePaginatedItemsResponse.md#equals)
- [fromBinary](EquationsSalesBundlesServicePaginatedItemsResponse.md#frombinary)
- [fromJson](EquationsSalesBundlesServicePaginatedItemsResponse.md#fromjson)
- [fromJsonString](EquationsSalesBundlesServicePaginatedItemsResponse.md#fromjsonstring)
- [getType](EquationsSalesBundlesServicePaginatedItemsResponse.md#gettype)
- [toBinary](EquationsSalesBundlesServicePaginatedItemsResponse.md#tobinary)
- [toJSON](EquationsSalesBundlesServicePaginatedItemsResponse.md#tojson)
- [toJson](EquationsSalesBundlesServicePaginatedItemsResponse.md#tojson-1)
- [toJsonString](EquationsSalesBundlesServicePaginatedItemsResponse.md#tojsonstring)
- [equals](EquationsSalesBundlesServicePaginatedItemsResponse.md#equals-1)
- [fromBinary](EquationsSalesBundlesServicePaginatedItemsResponse.md#frombinary-1)
- [fromJson](EquationsSalesBundlesServicePaginatedItemsResponse.md#fromjson-1)
- [fromJsonString](EquationsSalesBundlesServicePaginatedItemsResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsSalesBundlesServicePaginatedItemsResponse**(`data?`): [`EquationsSalesBundlesServicePaginatedItemsResponse`](EquationsSalesBundlesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsSalesBundlesServicePaginatedItemsResponse`](EquationsSalesBundlesServicePaginatedItemsResponse.md)\> |

#### Returns

[`EquationsSalesBundlesServicePaginatedItemsResponse`](EquationsSalesBundlesServicePaginatedItemsResponse.md)

#### Overrides

Message\&lt;EquationsSalesBundlesServicePaginatedItemsResponse\&gt;.constructor

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1191](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_sales_bundles.scailo_pb.ts#L1191)

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

[src/equations_sales_bundles.scailo_pb.ts:1161](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_sales_bundles.scailo_pb.ts#L1161)

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

[src/equations_sales_bundles.scailo_pb.ts:1171](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_sales_bundles.scailo_pb.ts#L1171)

___

### payload

• **payload**: [`EquationSalesBundleItem`](EquationSalesBundleItem.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.EquationSalesBundleItem payload = 4;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1189](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_sales_bundles.scailo_pb.ts#L1189)

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

[src/equations_sales_bundles.scailo_pb.ts:1181](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_sales_bundles.scailo_pb.ts#L1181)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1198](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_sales_bundles.scailo_pb.ts#L1198)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1196](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_sales_bundles.scailo_pb.ts#L1196)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsSalesBundlesServicePaginatedItemsResponse"``

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1197](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_sales_bundles.scailo_pb.ts#L1197)

## Methods

### clone

▸ **clone**(): [`EquationsSalesBundlesServicePaginatedItemsResponse`](EquationsSalesBundlesServicePaginatedItemsResponse.md)

Create a deep copy.

#### Returns

[`EquationsSalesBundlesServicePaginatedItemsResponse`](EquationsSalesBundlesServicePaginatedItemsResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsSalesBundlesServicePaginatedItemsResponse`](EquationsSalesBundlesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`EquationsSalesBundlesServicePaginatedItemsResponse`](EquationsSalesBundlesServicePaginatedItemsResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsSalesBundlesServicePaginatedItemsResponse`](EquationsSalesBundlesServicePaginatedItemsResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsSalesBundlesServicePaginatedItemsResponse`](EquationsSalesBundlesServicePaginatedItemsResponse.md)\>

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
| `a` | `undefined` \| [`EquationsSalesBundlesServicePaginatedItemsResponse`](EquationsSalesBundlesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`EquationsSalesBundlesServicePaginatedItemsResponse`](EquationsSalesBundlesServicePaginatedItemsResponse.md)\> |
| `b` | `undefined` \| [`EquationsSalesBundlesServicePaginatedItemsResponse`](EquationsSalesBundlesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`EquationsSalesBundlesServicePaginatedItemsResponse`](EquationsSalesBundlesServicePaginatedItemsResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1217](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_sales_bundles.scailo_pb.ts#L1217)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsSalesBundlesServicePaginatedItemsResponse`](EquationsSalesBundlesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsSalesBundlesServicePaginatedItemsResponse`](EquationsSalesBundlesServicePaginatedItemsResponse.md)

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1205](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_sales_bundles.scailo_pb.ts#L1205)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsSalesBundlesServicePaginatedItemsResponse`](EquationsSalesBundlesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsSalesBundlesServicePaginatedItemsResponse`](EquationsSalesBundlesServicePaginatedItemsResponse.md)

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1209](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_sales_bundles.scailo_pb.ts#L1209)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsSalesBundlesServicePaginatedItemsResponse`](EquationsSalesBundlesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsSalesBundlesServicePaginatedItemsResponse`](EquationsSalesBundlesServicePaginatedItemsResponse.md)

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1213](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/equations_sales_bundles.scailo_pb.ts#L1213)
