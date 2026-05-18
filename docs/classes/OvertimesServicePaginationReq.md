[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OvertimesServicePaginationReq

# Class: OvertimesServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.OvertimesServicePaginationReq

## Hierarchy

- `Message`\<[`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)\>

  ↳ **`OvertimesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](OvertimesServicePaginationReq.md#constructor)

### Properties

- [count](OvertimesServicePaginationReq.md#count)
- [isActive](OvertimesServicePaginationReq.md#isactive)
- [offset](OvertimesServicePaginationReq.md#offset)
- [sortKey](OvertimesServicePaginationReq.md#sortkey)
- [sortOrder](OvertimesServicePaginationReq.md#sortorder)
- [status](OvertimesServicePaginationReq.md#status)
- [fields](OvertimesServicePaginationReq.md#fields)
- [runtime](OvertimesServicePaginationReq.md#runtime)
- [typeName](OvertimesServicePaginationReq.md#typename)

### Methods

- [clone](OvertimesServicePaginationReq.md#clone)
- [equals](OvertimesServicePaginationReq.md#equals)
- [fromBinary](OvertimesServicePaginationReq.md#frombinary)
- [fromJson](OvertimesServicePaginationReq.md#fromjson)
- [fromJsonString](OvertimesServicePaginationReq.md#fromjsonstring)
- [getType](OvertimesServicePaginationReq.md#gettype)
- [toBinary](OvertimesServicePaginationReq.md#tobinary)
- [toJSON](OvertimesServicePaginationReq.md#tojson)
- [toJson](OvertimesServicePaginationReq.md#tojson-1)
- [toJsonString](OvertimesServicePaginationReq.md#tojsonstring)
- [equals](OvertimesServicePaginationReq.md#equals-1)
- [fromBinary](OvertimesServicePaginationReq.md#frombinary-1)
- [fromJson](OvertimesServicePaginationReq.md#fromjson-1)
- [fromJsonString](OvertimesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new OvertimesServicePaginationReq**(`data?`): [`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)\> |

#### Returns

[`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)

#### Overrides

Message\&lt;OvertimesServicePaginationReq\&gt;.constructor

#### Defined in

[src/overtimes.scailo_pb.ts:667](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L667)

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

[src/overtimes.scailo_pb.ts:620](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L620)

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

[src/overtimes.scailo_pb.ts:604](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L604)

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

[src/overtimes.scailo_pb.ts:636](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L636)

___

### sortKey

• **sortKey**: [`OVERTIME_SORT_KEY`](../enums/OVERTIME_SORT_KEY.md) = `OVERTIME_SORT_KEY.OVERTIME_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: Scailo.OVERTIME_SORT_KEY sort_key = 5;

#### Defined in

[src/overtimes.scailo_pb.ts:658](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L658)

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

[src/overtimes.scailo_pb.ts:648](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L648)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this overtime

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/overtimes.scailo_pb.ts:665](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L665)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/overtimes.scailo_pb.ts:674](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L674)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/overtimes.scailo_pb.ts:672](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L672)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OvertimesServicePaginationReq"``

#### Defined in

[src/overtimes.scailo_pb.ts:673](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L673)

## Methods

### clone

▸ **clone**(): [`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md) \| `PlainMessage`\<[`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md) \| `PlainMessage`\<[`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md) \| `PlainMessage`\<[`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/overtimes.scailo_pb.ts:695](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L695)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)

#### Defined in

[src/overtimes.scailo_pb.ts:683](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L683)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)

#### Defined in

[src/overtimes.scailo_pb.ts:687](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L687)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OvertimesServicePaginationReq`](OvertimesServicePaginationReq.md)

#### Defined in

[src/overtimes.scailo_pb.ts:691](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/overtimes.scailo_pb.ts#L691)
