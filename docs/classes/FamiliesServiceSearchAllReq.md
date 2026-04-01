[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamiliesServiceSearchAllReq

# Class: FamiliesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.FamiliesServiceSearchAllReq

## Hierarchy

- `Message`\<[`FamiliesServiceSearchAllReq`](FamiliesServiceSearchAllReq.md)\>

  ↳ **`FamiliesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](FamiliesServiceSearchAllReq.md#constructor)

### Properties

- [count](FamiliesServiceSearchAllReq.md#count)
- [entityUuid](FamiliesServiceSearchAllReq.md#entityuuid)
- [familyType](FamiliesServiceSearchAllReq.md#familytype)
- [isActive](FamiliesServiceSearchAllReq.md#isactive)
- [isLeaf](FamiliesServiceSearchAllReq.md#isleaf)
- [multiFamilyType](FamiliesServiceSearchAllReq.md#multifamilytype)
- [multiStatus](FamiliesServiceSearchAllReq.md#multistatus)
- [offset](FamiliesServiceSearchAllReq.md#offset)
- [parentId](FamiliesServiceSearchAllReq.md#parentid)
- [searchKey](FamiliesServiceSearchAllReq.md#searchkey)
- [sortKey](FamiliesServiceSearchAllReq.md#sortkey)
- [sortOrder](FamiliesServiceSearchAllReq.md#sortorder)
- [status](FamiliesServiceSearchAllReq.md#status)
- [fields](FamiliesServiceSearchAllReq.md#fields)
- [runtime](FamiliesServiceSearchAllReq.md#runtime)
- [typeName](FamiliesServiceSearchAllReq.md#typename)

### Methods

- [clone](FamiliesServiceSearchAllReq.md#clone)
- [equals](FamiliesServiceSearchAllReq.md#equals)
- [fromBinary](FamiliesServiceSearchAllReq.md#frombinary)
- [fromJson](FamiliesServiceSearchAllReq.md#fromjson)
- [fromJsonString](FamiliesServiceSearchAllReq.md#fromjsonstring)
- [getType](FamiliesServiceSearchAllReq.md#gettype)
- [toBinary](FamiliesServiceSearchAllReq.md#tobinary)
- [toJSON](FamiliesServiceSearchAllReq.md#tojson)
- [toJson](FamiliesServiceSearchAllReq.md#tojson-1)
- [toJsonString](FamiliesServiceSearchAllReq.md#tojsonstring)
- [equals](FamiliesServiceSearchAllReq.md#equals-1)
- [fromBinary](FamiliesServiceSearchAllReq.md#frombinary-1)
- [fromJson](FamiliesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](FamiliesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new FamiliesServiceSearchAllReq**(`data?`): [`FamiliesServiceSearchAllReq`](FamiliesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FamiliesServiceSearchAllReq`](FamiliesServiceSearchAllReq.md)\> |

#### Returns

[`FamiliesServiceSearchAllReq`](FamiliesServiceSearchAllReq.md)

#### Overrides

Message\&lt;FamiliesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/families.scailo_pb.ts:2068](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L2068)

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

[src/families.scailo_pb.ts:1949](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1949)

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

[src/families.scailo_pb.ts:2003](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L2003)

___

### familyType

• **familyType**: [`FAMILY_TYPE`](../enums/FAMILY_TYPE.md) = `FAMILY_TYPE.FAMILY_TYPE_ANY_UNSPECIFIED`

The type of the family

**`Generated`**

from field: Scailo.FAMILY_TYPE family_type = 25;

#### Defined in

[src/families.scailo_pb.ts:2045](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L2045)

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

[src/families.scailo_pb.ts:1933](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1933)

___

### isLeaf

• **isLeaf**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

Filter with the given leaf property

**`Generated`**

from field: Scailo.BOOL_FILTER is_leaf = 30;

#### Defined in

[src/families.scailo_pb.ts:2066](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L2066)

___

### multiFamilyType

• **multiFamilyType**: [`FAMILY_TYPE`](../enums/FAMILY_TYPE.md)[] = `[]`

Filter from any of the given family types. All the records that match any of the family types will be returned

**`Generated`**

from field: repeated Scailo.FAMILY_TYPE multi_family_type = 250;

#### Defined in

[src/families.scailo_pb.ts:2052](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L2052)

___

### multiStatus

• **multiStatus**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)[] = `[]`

Filter with the given multiple statuses (if the list is not empty). All the records that match any of the statuses will be returned

**`Generated`**

from field: repeated Scailo.STANDARD_LIFECYCLE_STATUS multi_status = 100;

#### Defined in

[src/families.scailo_pb.ts:2022](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L2022)

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

[src/families.scailo_pb.ts:1965](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1965)

___

### parentId

• **parentId**: `bigint` = `protoInt64.zero`

The ID of the associated non-leaf parent family

**`Generated`**

from field: uint64 parent_id = 29;

#### Defined in

[src/families.scailo_pb.ts:2059](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L2059)

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

[src/families.scailo_pb.ts:2038](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L2038)

___

### sortKey

• **sortKey**: [`FAMILY_SORT_KEY`](../enums/FAMILY_SORT_KEY.md) = `FAMILY_SORT_KEY.FAMILY_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.FAMILY_SORT_KEY sort_key = 5;

#### Defined in

[src/families.scailo_pb.ts:1987](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1987)

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

[src/families.scailo_pb.ts:1977](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L1977)

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

[src/families.scailo_pb.ts:2015](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L2015)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/families.scailo_pb.ts:2075](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L2075)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/families.scailo_pb.ts:2073](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L2073)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamiliesServiceSearchAllReq"``

#### Defined in

[src/families.scailo_pb.ts:2074](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L2074)

## Methods

### clone

▸ **clone**(): [`FamiliesServiceSearchAllReq`](FamiliesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`FamiliesServiceSearchAllReq`](FamiliesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`FamiliesServiceSearchAllReq`](FamiliesServiceSearchAllReq.md) \| `PlainMessage`\<[`FamiliesServiceSearchAllReq`](FamiliesServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`FamiliesServiceSearchAllReq`](FamiliesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FamiliesServiceSearchAllReq`](FamiliesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`FamiliesServiceSearchAllReq`](FamiliesServiceSearchAllReq.md) \| `PlainMessage`\<[`FamiliesServiceSearchAllReq`](FamiliesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`FamiliesServiceSearchAllReq`](FamiliesServiceSearchAllReq.md) \| `PlainMessage`\<[`FamiliesServiceSearchAllReq`](FamiliesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/families.scailo_pb.ts:2103](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L2103)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FamiliesServiceSearchAllReq`](FamiliesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FamiliesServiceSearchAllReq`](FamiliesServiceSearchAllReq.md)

#### Defined in

[src/families.scailo_pb.ts:2091](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L2091)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FamiliesServiceSearchAllReq`](FamiliesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceSearchAllReq`](FamiliesServiceSearchAllReq.md)

#### Defined in

[src/families.scailo_pb.ts:2095](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L2095)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FamiliesServiceSearchAllReq`](FamiliesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceSearchAllReq`](FamiliesServiceSearchAllReq.md)

#### Defined in

[src/families.scailo_pb.ts:2099](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/families.scailo_pb.ts#L2099)
