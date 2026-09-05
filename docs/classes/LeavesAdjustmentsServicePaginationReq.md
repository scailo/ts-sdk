[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LeavesAdjustmentsServicePaginationReq

# Class: LeavesAdjustmentsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.LeavesAdjustmentsServicePaginationReq

## Hierarchy

- `Message`\<[`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)\>

  ↳ **`LeavesAdjustmentsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](LeavesAdjustmentsServicePaginationReq.md#constructor)

### Properties

- [count](LeavesAdjustmentsServicePaginationReq.md#count)
- [isActive](LeavesAdjustmentsServicePaginationReq.md#isactive)
- [offset](LeavesAdjustmentsServicePaginationReq.md#offset)
- [sortKey](LeavesAdjustmentsServicePaginationReq.md#sortkey)
- [sortOrder](LeavesAdjustmentsServicePaginationReq.md#sortorder)
- [status](LeavesAdjustmentsServicePaginationReq.md#status)
- [fields](LeavesAdjustmentsServicePaginationReq.md#fields)
- [runtime](LeavesAdjustmentsServicePaginationReq.md#runtime)
- [typeName](LeavesAdjustmentsServicePaginationReq.md#typename)

### Methods

- [clone](LeavesAdjustmentsServicePaginationReq.md#clone)
- [equals](LeavesAdjustmentsServicePaginationReq.md#equals)
- [fromBinary](LeavesAdjustmentsServicePaginationReq.md#frombinary)
- [fromJson](LeavesAdjustmentsServicePaginationReq.md#fromjson)
- [fromJsonString](LeavesAdjustmentsServicePaginationReq.md#fromjsonstring)
- [getType](LeavesAdjustmentsServicePaginationReq.md#gettype)
- [toBinary](LeavesAdjustmentsServicePaginationReq.md#tobinary)
- [toJSON](LeavesAdjustmentsServicePaginationReq.md#tojson)
- [toJson](LeavesAdjustmentsServicePaginationReq.md#tojson-1)
- [toJsonString](LeavesAdjustmentsServicePaginationReq.md#tojsonstring)
- [equals](LeavesAdjustmentsServicePaginationReq.md#equals-1)
- [fromBinary](LeavesAdjustmentsServicePaginationReq.md#frombinary-1)
- [fromJson](LeavesAdjustmentsServicePaginationReq.md#fromjson-1)
- [fromJsonString](LeavesAdjustmentsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesAdjustmentsServicePaginationReq**(`data?`): [`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)\> |

#### Returns

[`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)

#### Overrides

Message\&lt;LeavesAdjustmentsServicePaginationReq\&gt;.constructor

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:1119](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L1119)

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

[src/leaves_adjustments.scailo_pb.ts:1072](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L1072)

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

[src/leaves_adjustments.scailo_pb.ts:1056](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L1056)

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

[src/leaves_adjustments.scailo_pb.ts:1088](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L1088)

___

### sortKey

• **sortKey**: [`LEAVE_ADJUSTMENT_SORT_KEY`](../enums/LEAVE_ADJUSTMENT_SORT_KEY.md) = `LEAVE_ADJUSTMENT_SORT_KEY.LEAVE_ADJUSTMENT_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: Scailo.LEAVE_ADJUSTMENT_SORT_KEY sort_key = 5;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:1110](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L1110)

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

[src/leaves_adjustments.scailo_pb.ts:1100](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L1100)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this record

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:1117](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L1117)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:1126](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L1126)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:1124](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L1124)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeavesAdjustmentsServicePaginationReq"``

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:1125](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L1125)

## Methods

### clone

▸ **clone**(): [`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md) \| `PlainMessage`\<[`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md) \| `PlainMessage`\<[`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md) \| `PlainMessage`\<[`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:1147](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L1147)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:1135](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L1135)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:1139](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L1139)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServicePaginationReq`](LeavesAdjustmentsServicePaginationReq.md)

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:1143](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/leaves_adjustments.scailo_pb.ts#L1143)
