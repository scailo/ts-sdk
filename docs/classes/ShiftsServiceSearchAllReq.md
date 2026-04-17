[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ShiftsServiceSearchAllReq

# Class: ShiftsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.ShiftsServiceSearchAllReq

## Hierarchy

- `Message`\<[`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)\>

  ↳ **`ShiftsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](ShiftsServiceSearchAllReq.md#constructor)

### Properties

- [count](ShiftsServiceSearchAllReq.md#count)
- [entityUuid](ShiftsServiceSearchAllReq.md#entityuuid)
- [isActive](ShiftsServiceSearchAllReq.md#isactive)
- [offset](ShiftsServiceSearchAllReq.md#offset)
- [searchKey](ShiftsServiceSearchAllReq.md#searchkey)
- [sortKey](ShiftsServiceSearchAllReq.md#sortkey)
- [sortOrder](ShiftsServiceSearchAllReq.md#sortorder)
- [status](ShiftsServiceSearchAllReq.md#status)
- [fields](ShiftsServiceSearchAllReq.md#fields)
- [runtime](ShiftsServiceSearchAllReq.md#runtime)
- [typeName](ShiftsServiceSearchAllReq.md#typename)

### Methods

- [clone](ShiftsServiceSearchAllReq.md#clone)
- [equals](ShiftsServiceSearchAllReq.md#equals)
- [fromBinary](ShiftsServiceSearchAllReq.md#frombinary)
- [fromJson](ShiftsServiceSearchAllReq.md#fromjson)
- [fromJsonString](ShiftsServiceSearchAllReq.md#fromjsonstring)
- [getType](ShiftsServiceSearchAllReq.md#gettype)
- [toBinary](ShiftsServiceSearchAllReq.md#tobinary)
- [toJSON](ShiftsServiceSearchAllReq.md#tojson)
- [toJson](ShiftsServiceSearchAllReq.md#tojson-1)
- [toJsonString](ShiftsServiceSearchAllReq.md#tojsonstring)
- [equals](ShiftsServiceSearchAllReq.md#equals-1)
- [fromBinary](ShiftsServiceSearchAllReq.md#frombinary-1)
- [fromJson](ShiftsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](ShiftsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftsServiceSearchAllReq**(`data?`): [`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)\> |

#### Returns

[`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)

#### Overrides

Message\&lt;ShiftsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/shifts.scailo_pb.ts:1468](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts.scailo_pb.ts#L1468)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.

**`Example`**

```ts
100
```

**`Regex`**

^(?:-1|0|[1-9][0-9]*)$

**`Format`**

Must be -1 or any non-negative integer (>= -1).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/shifts.scailo_pb.ts:1384](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts.scailo_pb.ts#L1384)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/shifts.scailo_pb.ts:1438](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts.scailo_pb.ts#L1438)

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

[src/shifts.scailo_pb.ts:1368](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts.scailo_pb.ts#L1368)

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

[src/shifts.scailo_pb.ts:1400](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts.scailo_pb.ts#L1400)

___

### searchKey

• **searchKey**: `string` = `""`

**`Mandatory`**

**`Description`**

The search string to match against reference IDs.

**`Example`**

```ts
"Medical 2023"
```

**`Regex`**

.*

@format: May contain any UTF-8 characters.

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/shifts.scailo_pb.ts:1466](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts.scailo_pb.ts#L1466)

___

### sortKey

• **sortKey**: [`SHIFT_SORT_KEY`](../enums/SHIFT_SORT_KEY.md) = `SHIFT_SORT_KEY.SHIFT_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.SHIFT_SORT_KEY sort_key = 5;

#### Defined in

[src/shifts.scailo_pb.ts:1422](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts.scailo_pb.ts#L1422)

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

[src/shifts.scailo_pb.ts:1412](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts.scailo_pb.ts#L1412)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/shifts.scailo_pb.ts:1450](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts.scailo_pb.ts#L1450)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shifts.scailo_pb.ts:1475](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts.scailo_pb.ts#L1475)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shifts.scailo_pb.ts:1473](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts.scailo_pb.ts#L1473)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ShiftsServiceSearchAllReq"``

#### Defined in

[src/shifts.scailo_pb.ts:1474](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts.scailo_pb.ts#L1474)

## Methods

### clone

▸ **clone**(): [`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md) \| `PlainMessage`\<[`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md) \| `PlainMessage`\<[`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md) \| `PlainMessage`\<[`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shifts.scailo_pb.ts:1498](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts.scailo_pb.ts#L1498)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)

#### Defined in

[src/shifts.scailo_pb.ts:1486](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts.scailo_pb.ts#L1486)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)

#### Defined in

[src/shifts.scailo_pb.ts:1490](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts.scailo_pb.ts#L1490)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsServiceSearchAllReq`](ShiftsServiceSearchAllReq.md)

#### Defined in

[src/shifts.scailo_pb.ts:1494](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts.scailo_pb.ts#L1494)
