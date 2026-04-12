[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CurrenciesServiceSearchAllReq

# Class: CurrenciesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.CurrenciesServiceSearchAllReq

## Hierarchy

- `Message`\<[`CurrenciesServiceSearchAllReq`](CurrenciesServiceSearchAllReq.md)\>

  ↳ **`CurrenciesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](CurrenciesServiceSearchAllReq.md#constructor)

### Properties

- [count](CurrenciesServiceSearchAllReq.md#count)
- [entityUuid](CurrenciesServiceSearchAllReq.md#entityuuid)
- [isActive](CurrenciesServiceSearchAllReq.md#isactive)
- [offset](CurrenciesServiceSearchAllReq.md#offset)
- [searchKey](CurrenciesServiceSearchAllReq.md#searchkey)
- [sortKey](CurrenciesServiceSearchAllReq.md#sortkey)
- [sortOrder](CurrenciesServiceSearchAllReq.md#sortorder)
- [status](CurrenciesServiceSearchAllReq.md#status)
- [fields](CurrenciesServiceSearchAllReq.md#fields)
- [runtime](CurrenciesServiceSearchAllReq.md#runtime)
- [typeName](CurrenciesServiceSearchAllReq.md#typename)

### Methods

- [clone](CurrenciesServiceSearchAllReq.md#clone)
- [equals](CurrenciesServiceSearchAllReq.md#equals)
- [fromBinary](CurrenciesServiceSearchAllReq.md#frombinary)
- [fromJson](CurrenciesServiceSearchAllReq.md#fromjson)
- [fromJsonString](CurrenciesServiceSearchAllReq.md#fromjsonstring)
- [getType](CurrenciesServiceSearchAllReq.md#gettype)
- [toBinary](CurrenciesServiceSearchAllReq.md#tobinary)
- [toJSON](CurrenciesServiceSearchAllReq.md#tojson)
- [toJson](CurrenciesServiceSearchAllReq.md#tojson-1)
- [toJsonString](CurrenciesServiceSearchAllReq.md#tojsonstring)
- [equals](CurrenciesServiceSearchAllReq.md#equals-1)
- [fromBinary](CurrenciesServiceSearchAllReq.md#frombinary-1)
- [fromJson](CurrenciesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](CurrenciesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new CurrenciesServiceSearchAllReq**(`data?`): [`CurrenciesServiceSearchAllReq`](CurrenciesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CurrenciesServiceSearchAllReq`](CurrenciesServiceSearchAllReq.md)\> |

#### Returns

[`CurrenciesServiceSearchAllReq`](CurrenciesServiceSearchAllReq.md)

#### Overrides

Message\&lt;CurrenciesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/currencies.scailo_pb.ts:1263](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/currencies.scailo_pb.ts#L1263)

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

[src/currencies.scailo_pb.ts:1179](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/currencies.scailo_pb.ts#L1179)

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

[src/currencies.scailo_pb.ts:1233](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/currencies.scailo_pb.ts#L1233)

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

[src/currencies.scailo_pb.ts:1163](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/currencies.scailo_pb.ts#L1163)

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

[src/currencies.scailo_pb.ts:1195](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/currencies.scailo_pb.ts#L1195)

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

[src/currencies.scailo_pb.ts:1261](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/currencies.scailo_pb.ts#L1261)

___

### sortKey

• **sortKey**: [`CURRENCY_SORT_KEY`](../enums/CURRENCY_SORT_KEY.md) = `CURRENCY_SORT_KEY.CURRENCY_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.CURRENCY_SORT_KEY sort_key = 5;

#### Defined in

[src/currencies.scailo_pb.ts:1217](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/currencies.scailo_pb.ts#L1217)

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

[src/currencies.scailo_pb.ts:1207](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/currencies.scailo_pb.ts#L1207)

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

[src/currencies.scailo_pb.ts:1245](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/currencies.scailo_pb.ts#L1245)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/currencies.scailo_pb.ts:1270](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/currencies.scailo_pb.ts#L1270)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/currencies.scailo_pb.ts:1268](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/currencies.scailo_pb.ts#L1268)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CurrenciesServiceSearchAllReq"``

#### Defined in

[src/currencies.scailo_pb.ts:1269](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/currencies.scailo_pb.ts#L1269)

## Methods

### clone

▸ **clone**(): [`CurrenciesServiceSearchAllReq`](CurrenciesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`CurrenciesServiceSearchAllReq`](CurrenciesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`CurrenciesServiceSearchAllReq`](CurrenciesServiceSearchAllReq.md) \| `PlainMessage`\<[`CurrenciesServiceSearchAllReq`](CurrenciesServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`CurrenciesServiceSearchAllReq`](CurrenciesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CurrenciesServiceSearchAllReq`](CurrenciesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`CurrenciesServiceSearchAllReq`](CurrenciesServiceSearchAllReq.md) \| `PlainMessage`\<[`CurrenciesServiceSearchAllReq`](CurrenciesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`CurrenciesServiceSearchAllReq`](CurrenciesServiceSearchAllReq.md) \| `PlainMessage`\<[`CurrenciesServiceSearchAllReq`](CurrenciesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/currencies.scailo_pb.ts:1293](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/currencies.scailo_pb.ts#L1293)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CurrenciesServiceSearchAllReq`](CurrenciesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CurrenciesServiceSearchAllReq`](CurrenciesServiceSearchAllReq.md)

#### Defined in

[src/currencies.scailo_pb.ts:1281](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/currencies.scailo_pb.ts#L1281)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CurrenciesServiceSearchAllReq`](CurrenciesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServiceSearchAllReq`](CurrenciesServiceSearchAllReq.md)

#### Defined in

[src/currencies.scailo_pb.ts:1285](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/currencies.scailo_pb.ts#L1285)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CurrenciesServiceSearchAllReq`](CurrenciesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServiceSearchAllReq`](CurrenciesServiceSearchAllReq.md)

#### Defined in

[src/currencies.scailo_pb.ts:1289](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/currencies.scailo_pb.ts#L1289)
