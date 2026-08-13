[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OvertimesServiceSearchAllReq

# Class: OvertimesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.OvertimesServiceSearchAllReq

## Hierarchy

- `Message`\<[`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)\>

  ↳ **`OvertimesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](OvertimesServiceSearchAllReq.md#constructor)

### Properties

- [count](OvertimesServiceSearchAllReq.md#count)
- [entityUuid](OvertimesServiceSearchAllReq.md#entityuuid)
- [isActive](OvertimesServiceSearchAllReq.md#isactive)
- [offset](OvertimesServiceSearchAllReq.md#offset)
- [searchKey](OvertimesServiceSearchAllReq.md#searchkey)
- [sortKey](OvertimesServiceSearchAllReq.md#sortkey)
- [sortOrder](OvertimesServiceSearchAllReq.md#sortorder)
- [status](OvertimesServiceSearchAllReq.md#status)
- [userId](OvertimesServiceSearchAllReq.md#userid)
- [fields](OvertimesServiceSearchAllReq.md#fields)
- [runtime](OvertimesServiceSearchAllReq.md#runtime)
- [typeName](OvertimesServiceSearchAllReq.md#typename)

### Methods

- [clone](OvertimesServiceSearchAllReq.md#clone)
- [equals](OvertimesServiceSearchAllReq.md#equals)
- [fromBinary](OvertimesServiceSearchAllReq.md#frombinary)
- [fromJson](OvertimesServiceSearchAllReq.md#fromjson)
- [fromJsonString](OvertimesServiceSearchAllReq.md#fromjsonstring)
- [getType](OvertimesServiceSearchAllReq.md#gettype)
- [toBinary](OvertimesServiceSearchAllReq.md#tobinary)
- [toJSON](OvertimesServiceSearchAllReq.md#tojson)
- [toJson](OvertimesServiceSearchAllReq.md#tojson-1)
- [toJsonString](OvertimesServiceSearchAllReq.md#tojsonstring)
- [equals](OvertimesServiceSearchAllReq.md#equals-1)
- [fromBinary](OvertimesServiceSearchAllReq.md#frombinary-1)
- [fromJson](OvertimesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](OvertimesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new OvertimesServiceSearchAllReq**(`data?`): [`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)\> |

#### Returns

[`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)

#### Overrides

Message\&lt;OvertimesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/overtimes.scailo_pb.ts:1678](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/overtimes.scailo_pb.ts#L1678)

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

[src/overtimes.scailo_pb.ts:1587](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/overtimes.scailo_pb.ts#L1587)

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

[src/overtimes.scailo_pb.ts:1641](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/overtimes.scailo_pb.ts#L1641)

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

[src/overtimes.scailo_pb.ts:1571](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/overtimes.scailo_pb.ts#L1571)

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

[src/overtimes.scailo_pb.ts:1603](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/overtimes.scailo_pb.ts#L1603)

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

[src/overtimes.scailo_pb.ts:1669](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/overtimes.scailo_pb.ts#L1669)

___

### sortKey

• **sortKey**: [`OVERTIME_SORT_KEY`](../enums/OVERTIME_SORT_KEY.md) = `OVERTIME_SORT_KEY.OVERTIME_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.OVERTIME_SORT_KEY sort_key = 5;

#### Defined in

[src/overtimes.scailo_pb.ts:1625](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/overtimes.scailo_pb.ts#L1625)

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

[src/overtimes.scailo_pb.ts:1615](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/overtimes.scailo_pb.ts#L1615)

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

[src/overtimes.scailo_pb.ts:1653](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/overtimes.scailo_pb.ts#L1653)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has requested for overtime

**`Generated`**

from field: uint64 user_id = 22;

#### Defined in

[src/overtimes.scailo_pb.ts:1676](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/overtimes.scailo_pb.ts#L1676)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/overtimes.scailo_pb.ts:1685](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/overtimes.scailo_pb.ts#L1685)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/overtimes.scailo_pb.ts:1683](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/overtimes.scailo_pb.ts#L1683)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OvertimesServiceSearchAllReq"``

#### Defined in

[src/overtimes.scailo_pb.ts:1684](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/overtimes.scailo_pb.ts#L1684)

## Methods

### clone

▸ **clone**(): [`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md) \| `PlainMessage`\<[`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md) \| `PlainMessage`\<[`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md) \| `PlainMessage`\<[`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/overtimes.scailo_pb.ts:1709](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/overtimes.scailo_pb.ts#L1709)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)

#### Defined in

[src/overtimes.scailo_pb.ts:1697](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/overtimes.scailo_pb.ts#L1697)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)

#### Defined in

[src/overtimes.scailo_pb.ts:1701](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/overtimes.scailo_pb.ts#L1701)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OvertimesServiceSearchAllReq`](OvertimesServiceSearchAllReq.md)

#### Defined in

[src/overtimes.scailo_pb.ts:1705](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/overtimes.scailo_pb.ts#L1705)
