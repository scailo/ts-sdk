[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LeavesTypesServicePaginationReq

# Class: LeavesTypesServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.LeavesTypesServicePaginationReq

## Hierarchy

- `Message`\<[`LeavesTypesServicePaginationReq`](LeavesTypesServicePaginationReq.md)\>

  ↳ **`LeavesTypesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](LeavesTypesServicePaginationReq.md#constructor)

### Properties

- [count](LeavesTypesServicePaginationReq.md#count)
- [isActive](LeavesTypesServicePaginationReq.md#isactive)
- [offset](LeavesTypesServicePaginationReq.md#offset)
- [sortKey](LeavesTypesServicePaginationReq.md#sortkey)
- [sortOrder](LeavesTypesServicePaginationReq.md#sortorder)
- [status](LeavesTypesServicePaginationReq.md#status)
- [fields](LeavesTypesServicePaginationReq.md#fields)
- [runtime](LeavesTypesServicePaginationReq.md#runtime)
- [typeName](LeavesTypesServicePaginationReq.md#typename)

### Methods

- [clone](LeavesTypesServicePaginationReq.md#clone)
- [equals](LeavesTypesServicePaginationReq.md#equals)
- [fromBinary](LeavesTypesServicePaginationReq.md#frombinary)
- [fromJson](LeavesTypesServicePaginationReq.md#fromjson)
- [fromJsonString](LeavesTypesServicePaginationReq.md#fromjsonstring)
- [getType](LeavesTypesServicePaginationReq.md#gettype)
- [toBinary](LeavesTypesServicePaginationReq.md#tobinary)
- [toJSON](LeavesTypesServicePaginationReq.md#tojson)
- [toJson](LeavesTypesServicePaginationReq.md#tojson-1)
- [toJsonString](LeavesTypesServicePaginationReq.md#tojsonstring)
- [equals](LeavesTypesServicePaginationReq.md#equals-1)
- [fromBinary](LeavesTypesServicePaginationReq.md#frombinary-1)
- [fromJson](LeavesTypesServicePaginationReq.md#fromjson-1)
- [fromJsonString](LeavesTypesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesTypesServicePaginationReq**(`data?`): [`LeavesTypesServicePaginationReq`](LeavesTypesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeavesTypesServicePaginationReq`](LeavesTypesServicePaginationReq.md)\> |

#### Returns

[`LeavesTypesServicePaginationReq`](LeavesTypesServicePaginationReq.md)

#### Overrides

Message\&lt;LeavesTypesServicePaginationReq\&gt;.constructor

#### Defined in

[src/leaves_types.scailo_pb.ts:525](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/leaves_types.scailo_pb.ts#L525)

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

[src/leaves_types.scailo_pb.ts:478](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/leaves_types.scailo_pb.ts#L478)

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

[src/leaves_types.scailo_pb.ts:462](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/leaves_types.scailo_pb.ts#L462)

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

[src/leaves_types.scailo_pb.ts:494](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/leaves_types.scailo_pb.ts#L494)

___

### sortKey

• **sortKey**: [`LEAVE_TYPE_SORT_KEY`](../enums/LEAVE_TYPE_SORT_KEY.md) = `LEAVE_TYPE_SORT_KEY.LEAVE_TYPE_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: Scailo.LEAVE_TYPE_SORT_KEY sort_key = 5;

#### Defined in

[src/leaves_types.scailo_pb.ts:516](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/leaves_types.scailo_pb.ts#L516)

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

[src/leaves_types.scailo_pb.ts:506](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/leaves_types.scailo_pb.ts#L506)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this leave type

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/leaves_types.scailo_pb.ts:523](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/leaves_types.scailo_pb.ts#L523)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_types.scailo_pb.ts:532](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/leaves_types.scailo_pb.ts#L532)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_types.scailo_pb.ts:530](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/leaves_types.scailo_pb.ts#L530)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeavesTypesServicePaginationReq"``

#### Defined in

[src/leaves_types.scailo_pb.ts:531](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/leaves_types.scailo_pb.ts#L531)

## Methods

### clone

▸ **clone**(): [`LeavesTypesServicePaginationReq`](LeavesTypesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`LeavesTypesServicePaginationReq`](LeavesTypesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesTypesServicePaginationReq`](LeavesTypesServicePaginationReq.md) \| `PlainMessage`\<[`LeavesTypesServicePaginationReq`](LeavesTypesServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeavesTypesServicePaginationReq`](LeavesTypesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeavesTypesServicePaginationReq`](LeavesTypesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`LeavesTypesServicePaginationReq`](LeavesTypesServicePaginationReq.md) \| `PlainMessage`\<[`LeavesTypesServicePaginationReq`](LeavesTypesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`LeavesTypesServicePaginationReq`](LeavesTypesServicePaginationReq.md) \| `PlainMessage`\<[`LeavesTypesServicePaginationReq`](LeavesTypesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_types.scailo_pb.ts:553](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/leaves_types.scailo_pb.ts#L553)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesTypesServicePaginationReq`](LeavesTypesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeavesTypesServicePaginationReq`](LeavesTypesServicePaginationReq.md)

#### Defined in

[src/leaves_types.scailo_pb.ts:541](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/leaves_types.scailo_pb.ts#L541)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesTypesServicePaginationReq`](LeavesTypesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesTypesServicePaginationReq`](LeavesTypesServicePaginationReq.md)

#### Defined in

[src/leaves_types.scailo_pb.ts:545](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/leaves_types.scailo_pb.ts#L545)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesTypesServicePaginationReq`](LeavesTypesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesTypesServicePaginationReq`](LeavesTypesServicePaginationReq.md)

#### Defined in

[src/leaves_types.scailo_pb.ts:549](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/leaves_types.scailo_pb.ts#L549)
