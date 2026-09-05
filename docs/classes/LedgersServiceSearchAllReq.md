[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LedgersServiceSearchAllReq

# Class: LedgersServiceSearchAllReq

Broad-spectrum search and lookup request for locating and paginating ledgers via text matching.
This message encapsulates full-text query parameters, pagination controls, sorting keys,
lifecycle status constraints, and other core references.

**Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
inputs, and omni-box search utilities where users need to match loose textual terms against
records while retaining structural pagination.

**`Generated`**

from message Scailo.LedgersServiceSearchAllReq

## Hierarchy

- `Message`\<[`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)\>

  ↳ **`LedgersServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](LedgersServiceSearchAllReq.md#constructor)

### Properties

- [count](LedgersServiceSearchAllReq.md#count)
- [entityUuid](LedgersServiceSearchAllReq.md#entityuuid)
- [isActive](LedgersServiceSearchAllReq.md#isactive)
- [isLeaf](LedgersServiceSearchAllReq.md#isleaf)
- [offset](LedgersServiceSearchAllReq.md#offset)
- [parentLedgerId](LedgersServiceSearchAllReq.md#parentledgerid)
- [searchKey](LedgersServiceSearchAllReq.md#searchkey)
- [sortKey](LedgersServiceSearchAllReq.md#sortkey)
- [sortOrder](LedgersServiceSearchAllReq.md#sortorder)
- [status](LedgersServiceSearchAllReq.md#status)
- [fields](LedgersServiceSearchAllReq.md#fields)
- [runtime](LedgersServiceSearchAllReq.md#runtime)
- [typeName](LedgersServiceSearchAllReq.md#typename)

### Methods

- [clone](LedgersServiceSearchAllReq.md#clone)
- [equals](LedgersServiceSearchAllReq.md#equals)
- [fromBinary](LedgersServiceSearchAllReq.md#frombinary)
- [fromJson](LedgersServiceSearchAllReq.md#fromjson)
- [fromJsonString](LedgersServiceSearchAllReq.md#fromjsonstring)
- [getType](LedgersServiceSearchAllReq.md#gettype)
- [toBinary](LedgersServiceSearchAllReq.md#tobinary)
- [toJSON](LedgersServiceSearchAllReq.md#tojson)
- [toJson](LedgersServiceSearchAllReq.md#tojson-1)
- [toJsonString](LedgersServiceSearchAllReq.md#tojsonstring)
- [equals](LedgersServiceSearchAllReq.md#equals-1)
- [fromBinary](LedgersServiceSearchAllReq.md#frombinary-1)
- [fromJson](LedgersServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](LedgersServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LedgersServiceSearchAllReq**(`data?`): [`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)\> |

#### Returns

[`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)

#### Overrides

Message\&lt;LedgersServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/ledgers.scailo_pb.ts:1514](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/ledgers.scailo_pb.ts#L1514)

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

[src/ledgers.scailo_pb.ts:1400](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/ledgers.scailo_pb.ts#L1400)

___

### entityUuid

• `Optional` **entityUuid**: `string`

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

from field: optional string entity_uuid = 6;

#### Defined in

[src/ledgers.scailo_pb.ts:1454](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/ledgers.scailo_pb.ts#L1454)

___

### isActive

• `Optional` **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/ledgers.scailo_pb.ts:1384](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/ledgers.scailo_pb.ts#L1384)

___

### isLeaf

• `Optional` **isLeaf**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Flag determining whether this ledger node is a terminal 'leaf' node that can directly hold transactional balances, or a 'non-leaf' grouping node.

**`Example`**

```ts
true
```

**`Format`**

Boolean value (`true` or `false`).

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_leaf = 23;

#### Defined in

[src/ledgers.scailo_pb.ts:1512](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/ledgers.scailo_pb.ts#L1512)

___

### offset

• `Optional` **offset**: `bigint`

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

from field: optional uint64 offset = 3;

#### Defined in

[src/ledgers.scailo_pb.ts:1416](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/ledgers.scailo_pb.ts#L1416)

___

### parentLedgerId

• `Optional` **parentLedgerId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the parent non-leaf ledger. Defaults to 0 if this is the root or top-level node in the ledger hierarchy.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative 64-bit integer.

**`Generated`**

from field: optional uint64 parent_ledger_id = 22;

#### Defined in

[src/ledgers.scailo_pb.ts:1498](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/ledgers.scailo_pb.ts#L1498)

___

### searchKey

• `Optional` **searchKey**: `string`

**`Optional`**

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

from field: optional string search_key = 11;

#### Defined in

[src/ledgers.scailo_pb.ts:1482](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/ledgers.scailo_pb.ts#L1482)

___

### sortKey

• `Optional` **sortKey**: [`LEDGER_SORT_KEY`](../enums/LEDGER_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.LEDGER_SORT_KEY sort_key = 5;

#### Defined in

[src/ledgers.scailo_pb.ts:1438](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/ledgers.scailo_pb.ts#L1438)

___

### sortOrder

• `Optional` **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md)

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: optional Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/ledgers.scailo_pb.ts:1428](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/ledgers.scailo_pb.ts#L1428)

___

### status

• `Optional` **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/ledgers.scailo_pb.ts:1466](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/ledgers.scailo_pb.ts#L1466)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/ledgers.scailo_pb.ts:1521](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/ledgers.scailo_pb.ts#L1521)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/ledgers.scailo_pb.ts:1519](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/ledgers.scailo_pb.ts#L1519)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LedgersServiceSearchAllReq"``

#### Defined in

[src/ledgers.scailo_pb.ts:1520](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/ledgers.scailo_pb.ts#L1520)

## Methods

### clone

▸ **clone**(): [`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md) \| `PlainMessage`\<[`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md) \| `PlainMessage`\<[`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md) \| `PlainMessage`\<[`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/ledgers.scailo_pb.ts:1546](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/ledgers.scailo_pb.ts#L1546)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)

#### Defined in

[src/ledgers.scailo_pb.ts:1534](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/ledgers.scailo_pb.ts#L1534)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)

#### Defined in

[src/ledgers.scailo_pb.ts:1538](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/ledgers.scailo_pb.ts#L1538)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LedgersServiceSearchAllReq`](LedgersServiceSearchAllReq.md)

#### Defined in

[src/ledgers.scailo_pb.ts:1542](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/ledgers.scailo_pb.ts#L1542)
