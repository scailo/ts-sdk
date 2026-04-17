[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesIndentsServicePaginationReq

# Class: PurchasesIndentsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.PurchasesIndentsServicePaginationReq

## Hierarchy

- `Message`\<[`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)\>

  ↳ **`PurchasesIndentsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](PurchasesIndentsServicePaginationReq.md#constructor)

### Properties

- [count](PurchasesIndentsServicePaginationReq.md#count)
- [isActive](PurchasesIndentsServicePaginationReq.md#isactive)
- [offset](PurchasesIndentsServicePaginationReq.md#offset)
- [sortKey](PurchasesIndentsServicePaginationReq.md#sortkey)
- [sortOrder](PurchasesIndentsServicePaginationReq.md#sortorder)
- [status](PurchasesIndentsServicePaginationReq.md#status)
- [fields](PurchasesIndentsServicePaginationReq.md#fields)
- [runtime](PurchasesIndentsServicePaginationReq.md#runtime)
- [typeName](PurchasesIndentsServicePaginationReq.md#typename)

### Methods

- [clone](PurchasesIndentsServicePaginationReq.md#clone)
- [equals](PurchasesIndentsServicePaginationReq.md#equals)
- [fromBinary](PurchasesIndentsServicePaginationReq.md#frombinary)
- [fromJson](PurchasesIndentsServicePaginationReq.md#fromjson)
- [fromJsonString](PurchasesIndentsServicePaginationReq.md#fromjsonstring)
- [getType](PurchasesIndentsServicePaginationReq.md#gettype)
- [toBinary](PurchasesIndentsServicePaginationReq.md#tobinary)
- [toJSON](PurchasesIndentsServicePaginationReq.md#tojson)
- [toJson](PurchasesIndentsServicePaginationReq.md#tojson-1)
- [toJsonString](PurchasesIndentsServicePaginationReq.md#tojsonstring)
- [equals](PurchasesIndentsServicePaginationReq.md#equals-1)
- [fromBinary](PurchasesIndentsServicePaginationReq.md#frombinary-1)
- [fromJson](PurchasesIndentsServicePaginationReq.md#fromjson-1)
- [fromJsonString](PurchasesIndentsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesIndentsServicePaginationReq**(`data?`): [`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)\> |

#### Returns

[`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)

#### Overrides

Message\&lt;PurchasesIndentsServicePaginationReq\&gt;.constructor

#### Defined in

[src/purchases_indents.scailo_pb.ts:1355](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_indents.scailo_pb.ts#L1355)

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

[src/purchases_indents.scailo_pb.ts:1308](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_indents.scailo_pb.ts#L1308)

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

[src/purchases_indents.scailo_pb.ts:1292](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_indents.scailo_pb.ts#L1292)

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

[src/purchases_indents.scailo_pb.ts:1324](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_indents.scailo_pb.ts#L1324)

___

### sortKey

• **sortKey**: [`PURCHASE_INDENT_SORT_KEY`](../enums/PURCHASE_INDENT_SORT_KEY.md) = `PURCHASE_INDENT_SORT_KEY.PURCHASE_INDENT_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: Scailo.PURCHASE_INDENT_SORT_KEY sort_key = 5;

#### Defined in

[src/purchases_indents.scailo_pb.ts:1346](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_indents.scailo_pb.ts#L1346)

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

[src/purchases_indents.scailo_pb.ts:1336](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_indents.scailo_pb.ts#L1336)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this purchase indent

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/purchases_indents.scailo_pb.ts:1353](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_indents.scailo_pb.ts#L1353)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_indents.scailo_pb.ts:1362](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_indents.scailo_pb.ts#L1362)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_indents.scailo_pb.ts:1360](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_indents.scailo_pb.ts#L1360)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesIndentsServicePaginationReq"``

#### Defined in

[src/purchases_indents.scailo_pb.ts:1361](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_indents.scailo_pb.ts#L1361)

## Methods

### clone

▸ **clone**(): [`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md) \| `PlainMessage`\<[`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md) \| `PlainMessage`\<[`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md) \| `PlainMessage`\<[`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_indents.scailo_pb.ts:1383](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_indents.scailo_pb.ts#L1383)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)

#### Defined in

[src/purchases_indents.scailo_pb.ts:1371](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_indents.scailo_pb.ts#L1371)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)

#### Defined in

[src/purchases_indents.scailo_pb.ts:1375](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_indents.scailo_pb.ts#L1375)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)

#### Defined in

[src/purchases_indents.scailo_pb.ts:1379](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/purchases_indents.scailo_pb.ts#L1379)
