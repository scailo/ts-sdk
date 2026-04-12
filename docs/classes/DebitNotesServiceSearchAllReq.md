[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DebitNotesServiceSearchAllReq

# Class: DebitNotesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.DebitNotesServiceSearchAllReq

## Hierarchy

- `Message`\<[`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)\>

  ↳ **`DebitNotesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](DebitNotesServiceSearchAllReq.md#constructor)

### Properties

- [count](DebitNotesServiceSearchAllReq.md#count)
- [entityUuid](DebitNotesServiceSearchAllReq.md#entityuuid)
- [isActive](DebitNotesServiceSearchAllReq.md#isactive)
- [offset](DebitNotesServiceSearchAllReq.md#offset)
- [refFrom](DebitNotesServiceSearchAllReq.md#reffrom)
- [refId](DebitNotesServiceSearchAllReq.md#refid)
- [searchKey](DebitNotesServiceSearchAllReq.md#searchkey)
- [sortKey](DebitNotesServiceSearchAllReq.md#sortkey)
- [sortOrder](DebitNotesServiceSearchAllReq.md#sortorder)
- [status](DebitNotesServiceSearchAllReq.md#status)
- [vendorId](DebitNotesServiceSearchAllReq.md#vendorid)
- [fields](DebitNotesServiceSearchAllReq.md#fields)
- [runtime](DebitNotesServiceSearchAllReq.md#runtime)
- [typeName](DebitNotesServiceSearchAllReq.md#typename)

### Methods

- [clone](DebitNotesServiceSearchAllReq.md#clone)
- [equals](DebitNotesServiceSearchAllReq.md#equals)
- [fromBinary](DebitNotesServiceSearchAllReq.md#frombinary)
- [fromJson](DebitNotesServiceSearchAllReq.md#fromjson)
- [fromJsonString](DebitNotesServiceSearchAllReq.md#fromjsonstring)
- [getType](DebitNotesServiceSearchAllReq.md#gettype)
- [toBinary](DebitNotesServiceSearchAllReq.md#tobinary)
- [toJSON](DebitNotesServiceSearchAllReq.md#tojson)
- [toJson](DebitNotesServiceSearchAllReq.md#tojson-1)
- [toJsonString](DebitNotesServiceSearchAllReq.md#tojsonstring)
- [equals](DebitNotesServiceSearchAllReq.md#equals-1)
- [fromBinary](DebitNotesServiceSearchAllReq.md#frombinary-1)
- [fromJson](DebitNotesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](DebitNotesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new DebitNotesServiceSearchAllReq**(`data?`): [`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)\> |

#### Returns

[`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)

#### Overrides

Message\&lt;DebitNotesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/debit_notes.scailo_pb.ts:2993](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/debit_notes.scailo_pb.ts#L2993)

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

[src/debit_notes.scailo_pb.ts:2888](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/debit_notes.scailo_pb.ts#L2888)

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

[src/debit_notes.scailo_pb.ts:2942](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/debit_notes.scailo_pb.ts#L2942)

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

[src/debit_notes.scailo_pb.ts:2872](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/debit_notes.scailo_pb.ts#L2872)

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

[src/debit_notes.scailo_pb.ts:2904](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/debit_notes.scailo_pb.ts#L2904)

___

### refFrom

• **refFrom**: [`DEBIT_NOTE_REF_FROM`](../enums/DEBIT_NOTE_REF_FROM.md) = `DEBIT_NOTE_REF_FROM.DEBIT_NOTE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.DEBIT_NOTE_REF_FROM ref_from = 22;

#### Defined in

[src/debit_notes.scailo_pb.ts:2977](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/debit_notes.scailo_pb.ts#L2977)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/debit_notes.scailo_pb.ts:2984](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/debit_notes.scailo_pb.ts#L2984)

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

[src/debit_notes.scailo_pb.ts:2970](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/debit_notes.scailo_pb.ts#L2970)

___

### sortKey

• **sortKey**: [`DEBIT_NOTE_SORT_KEY`](../enums/DEBIT_NOTE_SORT_KEY.md) = `DEBIT_NOTE_SORT_KEY.DEBIT_NOTE_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.DEBIT_NOTE_SORT_KEY sort_key = 5;

#### Defined in

[src/debit_notes.scailo_pb.ts:2926](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/debit_notes.scailo_pb.ts#L2926)

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

[src/debit_notes.scailo_pb.ts:2916](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/debit_notes.scailo_pb.ts#L2916)

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

[src/debit_notes.scailo_pb.ts:2954](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/debit_notes.scailo_pb.ts#L2954)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 25;

#### Defined in

[src/debit_notes.scailo_pb.ts:2991](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/debit_notes.scailo_pb.ts#L2991)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/debit_notes.scailo_pb.ts:3000](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/debit_notes.scailo_pb.ts#L3000)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/debit_notes.scailo_pb.ts:2998](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/debit_notes.scailo_pb.ts#L2998)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DebitNotesServiceSearchAllReq"``

#### Defined in

[src/debit_notes.scailo_pb.ts:2999](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/debit_notes.scailo_pb.ts#L2999)

## Methods

### clone

▸ **clone**(): [`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md) \| `PlainMessage`\<[`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md) \| `PlainMessage`\<[`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md) \| `PlainMessage`\<[`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/debit_notes.scailo_pb.ts:3026](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/debit_notes.scailo_pb.ts#L3026)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:3014](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/debit_notes.scailo_pb.ts#L3014)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:3018](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/debit_notes.scailo_pb.ts#L3018)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:3022](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/debit_notes.scailo_pb.ts#L3022)
