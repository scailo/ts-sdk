[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsSalesBundlesServicePaginationReq

# Class: EquationsSalesBundlesServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.EquationsSalesBundlesServicePaginationReq

## Hierarchy

- `Message`\<[`EquationsSalesBundlesServicePaginationReq`](EquationsSalesBundlesServicePaginationReq.md)\>

  ↳ **`EquationsSalesBundlesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](EquationsSalesBundlesServicePaginationReq.md#constructor)

### Properties

- [count](EquationsSalesBundlesServicePaginationReq.md#count)
- [isActive](EquationsSalesBundlesServicePaginationReq.md#isactive)
- [offset](EquationsSalesBundlesServicePaginationReq.md#offset)
- [sortKey](EquationsSalesBundlesServicePaginationReq.md#sortkey)
- [sortOrder](EquationsSalesBundlesServicePaginationReq.md#sortorder)
- [status](EquationsSalesBundlesServicePaginationReq.md#status)
- [fields](EquationsSalesBundlesServicePaginationReq.md#fields)
- [runtime](EquationsSalesBundlesServicePaginationReq.md#runtime)
- [typeName](EquationsSalesBundlesServicePaginationReq.md#typename)

### Methods

- [clone](EquationsSalesBundlesServicePaginationReq.md#clone)
- [equals](EquationsSalesBundlesServicePaginationReq.md#equals)
- [fromBinary](EquationsSalesBundlesServicePaginationReq.md#frombinary)
- [fromJson](EquationsSalesBundlesServicePaginationReq.md#fromjson)
- [fromJsonString](EquationsSalesBundlesServicePaginationReq.md#fromjsonstring)
- [getType](EquationsSalesBundlesServicePaginationReq.md#gettype)
- [toBinary](EquationsSalesBundlesServicePaginationReq.md#tobinary)
- [toJSON](EquationsSalesBundlesServicePaginationReq.md#tojson)
- [toJson](EquationsSalesBundlesServicePaginationReq.md#tojson-1)
- [toJsonString](EquationsSalesBundlesServicePaginationReq.md#tojsonstring)
- [equals](EquationsSalesBundlesServicePaginationReq.md#equals-1)
- [fromBinary](EquationsSalesBundlesServicePaginationReq.md#frombinary-1)
- [fromJson](EquationsSalesBundlesServicePaginationReq.md#fromjson-1)
- [fromJsonString](EquationsSalesBundlesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsSalesBundlesServicePaginationReq**(`data?`): [`EquationsSalesBundlesServicePaginationReq`](EquationsSalesBundlesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsSalesBundlesServicePaginationReq`](EquationsSalesBundlesServicePaginationReq.md)\> |

#### Returns

[`EquationsSalesBundlesServicePaginationReq`](EquationsSalesBundlesServicePaginationReq.md)

#### Overrides

Message\&lt;EquationsSalesBundlesServicePaginationReq\&gt;.constructor

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1302](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_sales_bundles.scailo_pb.ts#L1302)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to return per page.

**`Example`**

```ts
50
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Must be a strictly positive integer (1 or greater).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1255](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_sales_bundles.scailo_pb.ts#L1255)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1239](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_sales_bundles.scailo_pb.ts#L1239)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Number of records to skip (offset) for pagination.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1271](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_sales_bundles.scailo_pb.ts#L1271)

___

### sortKey

• **sortKey**: [`EQUATION_SALES_BUNDLE_SORT_KEY`](../enums/EQUATION_SALES_BUNDLE_SORT_KEY.md) = `EQUATION_SALES_BUNDLE_SORT_KEY.EQUATION_SALES_BUNDLE_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: Scailo.EQUATION_SALES_BUNDLE_SORT_KEY sort_key = 5;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1293](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_sales_bundles.scailo_pb.ts#L1293)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1283](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_sales_bundles.scailo_pb.ts#L1283)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this equation sales bundle

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1300](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_sales_bundles.scailo_pb.ts#L1300)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1309](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_sales_bundles.scailo_pb.ts#L1309)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1307](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_sales_bundles.scailo_pb.ts#L1307)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsSalesBundlesServicePaginationReq"``

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1308](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_sales_bundles.scailo_pb.ts#L1308)

## Methods

### clone

▸ **clone**(): [`EquationsSalesBundlesServicePaginationReq`](EquationsSalesBundlesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`EquationsSalesBundlesServicePaginationReq`](EquationsSalesBundlesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsSalesBundlesServicePaginationReq`](EquationsSalesBundlesServicePaginationReq.md) \| `PlainMessage`\<[`EquationsSalesBundlesServicePaginationReq`](EquationsSalesBundlesServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsSalesBundlesServicePaginationReq`](EquationsSalesBundlesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsSalesBundlesServicePaginationReq`](EquationsSalesBundlesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`EquationsSalesBundlesServicePaginationReq`](EquationsSalesBundlesServicePaginationReq.md) \| `PlainMessage`\<[`EquationsSalesBundlesServicePaginationReq`](EquationsSalesBundlesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`EquationsSalesBundlesServicePaginationReq`](EquationsSalesBundlesServicePaginationReq.md) \| `PlainMessage`\<[`EquationsSalesBundlesServicePaginationReq`](EquationsSalesBundlesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1330](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_sales_bundles.scailo_pb.ts#L1330)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsSalesBundlesServicePaginationReq`](EquationsSalesBundlesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsSalesBundlesServicePaginationReq`](EquationsSalesBundlesServicePaginationReq.md)

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1318](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_sales_bundles.scailo_pb.ts#L1318)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsSalesBundlesServicePaginationReq`](EquationsSalesBundlesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsSalesBundlesServicePaginationReq`](EquationsSalesBundlesServicePaginationReq.md)

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1322](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_sales_bundles.scailo_pb.ts#L1322)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsSalesBundlesServicePaginationReq`](EquationsSalesBundlesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsSalesBundlesServicePaginationReq`](EquationsSalesBundlesServicePaginationReq.md)

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1326](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_sales_bundles.scailo_pb.ts#L1326)
