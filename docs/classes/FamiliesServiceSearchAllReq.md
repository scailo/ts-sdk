[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamiliesServiceSearchAllReq

# Class: FamiliesServiceSearchAllReq

Broad-spectrum search and lookup request for locating and paginating families via text matching.
This message encapsulates full-text query parameters, pagination controls, sorting keys,
lifecycle status constraints, and other core references.

**Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
inputs, and omni-box search utilities where users need to match loose textual terms against
records while retaining structural pagination.

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

[src/families.scailo_pb.ts:2895](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2895)

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

[src/families.scailo_pb.ts:2735](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2735)

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

[src/families.scailo_pb.ts:2789](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2789)

___

### familyType

• `Optional` **familyType**: [`FAMILY_TYPE`](../enums/FAMILY_TYPE.md)

**`Optional`**

**`Description`**

The classification type of the family, dictating its operational lifecycle and valid transaction types (e.g., equipment, feedstock, product). Can be updated only prior to the first approval.

**`Example`**

```ts
"FAMILY_TYPE_COMPONENT"
```

**`Regex`**

^[A-Z_]+$

**`Format`**

Valid FAMILY_TYPE enum value string or integer.

**`Generated`**

from field: optional Scailo.FAMILY_TYPE family_type = 25;

#### Defined in

[src/families.scailo_pb.ts:2847](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2847)

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

[src/families.scailo_pb.ts:2719](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2719)

___

### isLeaf

• `Optional` **isLeaf**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

A boolean flag indicating whether this family is a leaf node in the hierarchy (i.e., it cannot contain nested sub-families). Can be updated only prior to the first approval.

**`Example`**

```ts
true
```

**`Regex`**

^(?:true|false)$

**`Format`**

Boolean true or false.

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_leaf = 30;

#### Defined in

[src/families.scailo_pb.ts:2893](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2893)

___

### multiFamilyType

• **multiFamilyType**: [`FAMILY_TYPE`](../enums/FAMILY_TYPE.md)[] = `[]`

**`Optional`**

**`Description`**

Filter by multiple family classification types simultaneously. Returns records that match any of the provided types (logical OR). If the list is empty, this filter is disregarded.

**`Example`**

```ts
["FAMILY_TYPE_COMPONENT", "FAMILY_TYPE_EQUIPMENT"]
```

**`Format`**

Repeated array of valid FAMILY_TYPE enum strings or integer values.

**`Generated`**

from field: repeated Scailo.FAMILY_TYPE multi_family_type = 250;

#### Defined in

[src/families.scailo_pb.ts:2861](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2861)

___

### multiStatus

• **multiStatus**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)[] = `[]`

**`Optional`**

**`Description`**

Filter by multiple lifecycle statuses simultaneously. Returns records that match any of the provided statuses (logical OR). If the list is empty, this filter is disregarded.

**`Example`**

```ts
["DRAFT", "STANDING"]
```

**`Format`**

Repeated array of valid STANDARD_LIFECYCLE_STATUS enum strings or integer values.

**`Generated`**

from field: repeated Scailo.STANDARD_LIFECYCLE_STATUS multi_status = 100;

#### Defined in

[src/families.scailo_pb.ts:2815](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2815)

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

[src/families.scailo_pb.ts:2751](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2751)

___

### parentId

• `Optional` **parentId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the parent family. A value of 0 indicates this is a top-level root family. Can be updated only prior to the first approval.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Unsigned 64-bit integer greater than or equal to 0.

**`Generated`**

from field: optional uint64 parent_id = 29;

#### Defined in

[src/families.scailo_pb.ts:2877](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2877)

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

[src/families.scailo_pb.ts:2831](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2831)

___

### sortKey

• `Optional` **sortKey**: [`FAMILY_SORT_KEY`](../enums/FAMILY_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.FAMILY_SORT_KEY sort_key = 5;

#### Defined in

[src/families.scailo_pb.ts:2773](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2773)

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

[src/families.scailo_pb.ts:2763](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2763)

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

[src/families.scailo_pb.ts:2801](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2801)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/families.scailo_pb.ts:2902](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2902)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/families.scailo_pb.ts:2900](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2900)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamiliesServiceSearchAllReq"``

#### Defined in

[src/families.scailo_pb.ts:2901](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2901)

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

[src/families.scailo_pb.ts:2930](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2930)

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

[src/families.scailo_pb.ts:2918](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2918)

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

[src/families.scailo_pb.ts:2922](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2922)

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

[src/families.scailo_pb.ts:2926](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L2926)
