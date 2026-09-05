[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoalsServiceSearchAllReq

# Class: GoalsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.GoalsServiceSearchAllReq

## Hierarchy

- `Message`\<[`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)\>

  ↳ **`GoalsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](GoalsServiceSearchAllReq.md#constructor)

### Properties

- [count](GoalsServiceSearchAllReq.md#count)
- [entityUuid](GoalsServiceSearchAllReq.md#entityuuid)
- [isActive](GoalsServiceSearchAllReq.md#isactive)
- [offset](GoalsServiceSearchAllReq.md#offset)
- [searchKey](GoalsServiceSearchAllReq.md#searchkey)
- [sortKey](GoalsServiceSearchAllReq.md#sortkey)
- [sortOrder](GoalsServiceSearchAllReq.md#sortorder)
- [status](GoalsServiceSearchAllReq.md#status)
- [userId](GoalsServiceSearchAllReq.md#userid)
- [fields](GoalsServiceSearchAllReq.md#fields)
- [runtime](GoalsServiceSearchAllReq.md#runtime)
- [typeName](GoalsServiceSearchAllReq.md#typename)

### Methods

- [clone](GoalsServiceSearchAllReq.md#clone)
- [equals](GoalsServiceSearchAllReq.md#equals)
- [fromBinary](GoalsServiceSearchAllReq.md#frombinary)
- [fromJson](GoalsServiceSearchAllReq.md#fromjson)
- [fromJsonString](GoalsServiceSearchAllReq.md#fromjsonstring)
- [getType](GoalsServiceSearchAllReq.md#gettype)
- [toBinary](GoalsServiceSearchAllReq.md#tobinary)
- [toJSON](GoalsServiceSearchAllReq.md#tojson)
- [toJson](GoalsServiceSearchAllReq.md#tojson-1)
- [toJsonString](GoalsServiceSearchAllReq.md#tojsonstring)
- [equals](GoalsServiceSearchAllReq.md#equals-1)
- [fromBinary](GoalsServiceSearchAllReq.md#frombinary-1)
- [fromJson](GoalsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](GoalsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoalsServiceSearchAllReq**(`data?`): [`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)\> |

#### Returns

[`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)

#### Overrides

Message\&lt;GoalsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/goals.scailo_pb.ts:2619](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L2619)

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

[src/goals.scailo_pb.ts:2528](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L2528)

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

[src/goals.scailo_pb.ts:2582](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L2582)

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

[src/goals.scailo_pb.ts:2512](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L2512)

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

[src/goals.scailo_pb.ts:2544](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L2544)

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

[src/goals.scailo_pb.ts:2610](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L2610)

___

### sortKey

• **sortKey**: [`GOAL_SORT_KEY`](../enums/GOAL_SORT_KEY.md) = `GOAL_SORT_KEY.GOAL_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.GOAL_SORT_KEY sort_key = 5;

#### Defined in

[src/goals.scailo_pb.ts:2566](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L2566)

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

[src/goals.scailo_pb.ts:2556](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L2556)

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

[src/goals.scailo_pb.ts:2594](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L2594)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The associated user ID

**`Generated`**

from field: uint64 user_id = 22;

#### Defined in

[src/goals.scailo_pb.ts:2617](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L2617)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goals.scailo_pb.ts:2626](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L2626)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goals.scailo_pb.ts:2624](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L2624)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoalsServiceSearchAllReq"``

#### Defined in

[src/goals.scailo_pb.ts:2625](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L2625)

## Methods

### clone

▸ **clone**(): [`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md) \| `PlainMessage`\<[`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md) \| `PlainMessage`\<[`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md) \| `PlainMessage`\<[`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goals.scailo_pb.ts:2650](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L2650)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)

#### Defined in

[src/goals.scailo_pb.ts:2638](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L2638)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)

#### Defined in

[src/goals.scailo_pb.ts:2642](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L2642)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceSearchAllReq`](GoalsServiceSearchAllReq.md)

#### Defined in

[src/goals.scailo_pb.ts:2646](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goals.scailo_pb.ts#L2646)
