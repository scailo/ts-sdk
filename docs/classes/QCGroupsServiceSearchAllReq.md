[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCGroupsServiceSearchAllReq

# Class: QCGroupsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.QCGroupsServiceSearchAllReq

## Hierarchy

- `Message`\<[`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)\>

  ↳ **`QCGroupsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](QCGroupsServiceSearchAllReq.md#constructor)

### Properties

- [count](QCGroupsServiceSearchAllReq.md#count)
- [entityUuid](QCGroupsServiceSearchAllReq.md#entityuuid)
- [familyId](QCGroupsServiceSearchAllReq.md#familyid)
- [isActive](QCGroupsServiceSearchAllReq.md#isactive)
- [offset](QCGroupsServiceSearchAllReq.md#offset)
- [searchKey](QCGroupsServiceSearchAllReq.md#searchkey)
- [sortKey](QCGroupsServiceSearchAllReq.md#sortkey)
- [sortOrder](QCGroupsServiceSearchAllReq.md#sortorder)
- [status](QCGroupsServiceSearchAllReq.md#status)
- [fields](QCGroupsServiceSearchAllReq.md#fields)
- [runtime](QCGroupsServiceSearchAllReq.md#runtime)
- [typeName](QCGroupsServiceSearchAllReq.md#typename)

### Methods

- [clone](QCGroupsServiceSearchAllReq.md#clone)
- [equals](QCGroupsServiceSearchAllReq.md#equals)
- [fromBinary](QCGroupsServiceSearchAllReq.md#frombinary)
- [fromJson](QCGroupsServiceSearchAllReq.md#fromjson)
- [fromJsonString](QCGroupsServiceSearchAllReq.md#fromjsonstring)
- [getType](QCGroupsServiceSearchAllReq.md#gettype)
- [toBinary](QCGroupsServiceSearchAllReq.md#tobinary)
- [toJSON](QCGroupsServiceSearchAllReq.md#tojson)
- [toJson](QCGroupsServiceSearchAllReq.md#tojson-1)
- [toJsonString](QCGroupsServiceSearchAllReq.md#tojsonstring)
- [equals](QCGroupsServiceSearchAllReq.md#equals-1)
- [fromBinary](QCGroupsServiceSearchAllReq.md#frombinary-1)
- [fromJson](QCGroupsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](QCGroupsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCGroupsServiceSearchAllReq**(`data?`): [`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)\> |

#### Returns

[`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)

#### Overrides

Message\&lt;QCGroupsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/qc_groups.scailo_pb.ts:2403](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2403)

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

[src/qc_groups.scailo_pb.ts:2312](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2312)

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

[src/qc_groups.scailo_pb.ts:2366](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2366)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Retrieve qc groups that are assigned to the given family ID

**`Generated`**

from field: uint64 family_id = 30;

#### Defined in

[src/qc_groups.scailo_pb.ts:2401](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2401)

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

[src/qc_groups.scailo_pb.ts:2296](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2296)

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

[src/qc_groups.scailo_pb.ts:2328](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2328)

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

[src/qc_groups.scailo_pb.ts:2394](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2394)

___

### sortKey

• **sortKey**: [`QC_GROUP_SORT_KEY`](../enums/QC_GROUP_SORT_KEY.md) = `QC_GROUP_SORT_KEY.QC_GROUP_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.QC_GROUP_SORT_KEY sort_key = 5;

#### Defined in

[src/qc_groups.scailo_pb.ts:2350](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2350)

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

[src/qc_groups.scailo_pb.ts:2340](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2340)

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

[src/qc_groups.scailo_pb.ts:2378](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2378)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_groups.scailo_pb.ts:2410](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2410)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_groups.scailo_pb.ts:2408](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2408)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCGroupsServiceSearchAllReq"``

#### Defined in

[src/qc_groups.scailo_pb.ts:2409](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2409)

## Methods

### clone

▸ **clone**(): [`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md) \| `PlainMessage`\<[`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md) \| `PlainMessage`\<[`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md) \| `PlainMessage`\<[`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_groups.scailo_pb.ts:2434](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2434)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)

#### Defined in

[src/qc_groups.scailo_pb.ts:2422](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2422)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)

#### Defined in

[src/qc_groups.scailo_pb.ts:2426](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2426)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceSearchAllReq`](QCGroupsServiceSearchAllReq.md)

#### Defined in

[src/qc_groups.scailo_pb.ts:2430](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2430)
