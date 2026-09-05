[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AssociatesServiceSearchAllReq

# Class: AssociatesServiceSearchAllReq

Broad-spectrum search and lookup request for locating and paginating associates via text matching.
This message encapsulates full-text query parameters, pagination controls, sorting keys,
lifecycle status constraints, and other core references.

**Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
inputs, and omni-box search utilities where users need to match loose textual terms against
records while retaining structural pagination.

**`Generated`**

from message Scailo.AssociatesServiceSearchAllReq

## Hierarchy

- `Message`\<[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)\>

  ↳ **`AssociatesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](AssociatesServiceSearchAllReq.md#constructor)

### Properties

- [count](AssociatesServiceSearchAllReq.md#count)
- [entityUuid](AssociatesServiceSearchAllReq.md#entityuuid)
- [isActive](AssociatesServiceSearchAllReq.md#isactive)
- [offset](AssociatesServiceSearchAllReq.md#offset)
- [orgRefFrom](AssociatesServiceSearchAllReq.md#orgreffrom)
- [orgRefId](AssociatesServiceSearchAllReq.md#orgrefid)
- [searchKey](AssociatesServiceSearchAllReq.md#searchkey)
- [sortKey](AssociatesServiceSearchAllReq.md#sortkey)
- [sortOrder](AssociatesServiceSearchAllReq.md#sortorder)
- [fields](AssociatesServiceSearchAllReq.md#fields)
- [runtime](AssociatesServiceSearchAllReq.md#runtime)
- [typeName](AssociatesServiceSearchAllReq.md#typename)

### Methods

- [clone](AssociatesServiceSearchAllReq.md#clone)
- [equals](AssociatesServiceSearchAllReq.md#equals)
- [fromBinary](AssociatesServiceSearchAllReq.md#frombinary)
- [fromJson](AssociatesServiceSearchAllReq.md#fromjson)
- [fromJsonString](AssociatesServiceSearchAllReq.md#fromjsonstring)
- [getType](AssociatesServiceSearchAllReq.md#gettype)
- [toBinary](AssociatesServiceSearchAllReq.md#tobinary)
- [toJSON](AssociatesServiceSearchAllReq.md#tojson)
- [toJson](AssociatesServiceSearchAllReq.md#tojson-1)
- [toJsonString](AssociatesServiceSearchAllReq.md#tojsonstring)
- [equals](AssociatesServiceSearchAllReq.md#equals-1)
- [fromBinary](AssociatesServiceSearchAllReq.md#frombinary-1)
- [fromJson](AssociatesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](AssociatesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssociatesServiceSearchAllReq**(`data?`): [`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)\> |

#### Returns

[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

#### Overrides

Message\&lt;AssociatesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/associates.scailo_pb.ts:2286](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L2286)

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

[src/associates.scailo_pb.ts:2184](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L2184)

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

[src/associates.scailo_pb.ts:2238](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L2238)

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

[src/associates.scailo_pb.ts:2168](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L2168)

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

[src/associates.scailo_pb.ts:2200](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L2200)

___

### orgRefFrom

• `Optional` **orgRefFrom**: [`ASSOCIATE_ORG_REF_FROM`](../enums/ASSOCIATE_ORG_REF_FROM.md)

**`Optional`**

**`Description`**

Identifies the type of external organization mapping (e.g., Client, Vendor, or None).

**`Example`**

```ts
ASSOCIATE_ORG_REF_FROM_EMPTY
```

**`Format`**

Must align with valid states within the ASSOCIATE_ORG_REF_FROM enum definition.

**`Generated`**

from field: optional Scailo.ASSOCIATE_ORG_REF_FROM org_ref_from = 13;

#### Defined in

[src/associates.scailo_pb.ts:2268](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L2268)

___

### orgRefId

• `Optional` **orgRefId**: `bigint`

**`Optional`**

**`Description`**

The numeric sequence identifier matching the targeted external Client or Vendor entity.

**`Example`**

```ts
8923
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer. Evaluated and validated in conjunction with the `org_ref_from` selector.

**`Generated`**

from field: optional uint64 org_ref_id = 14;

#### Defined in

[src/associates.scailo_pb.ts:2284](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L2284)

___

### searchKey

• `Optional` **searchKey**: `string`

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

from field: optional string search_key = 10;

#### Defined in

[src/associates.scailo_pb.ts:2254](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L2254)

___

### sortKey

• `Optional` **sortKey**: [`ASSOCIATE_SORT_KEY`](../enums/ASSOCIATE_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.ASSOCIATE_SORT_KEY sort_key = 5;

#### Defined in

[src/associates.scailo_pb.ts:2222](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L2222)

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

[src/associates.scailo_pb.ts:2212](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L2212)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/associates.scailo_pb.ts:2293](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L2293)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/associates.scailo_pb.ts:2291](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L2291)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssociatesServiceSearchAllReq"``

#### Defined in

[src/associates.scailo_pb.ts:2292](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L2292)

## Methods

### clone

▸ **clone**(): [`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md) \| `PlainMessage`\<[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md) \| `PlainMessage`\<[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md) \| `PlainMessage`\<[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/associates.scailo_pb.ts:2317](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L2317)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

#### Defined in

[src/associates.scailo_pb.ts:2305](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L2305)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

#### Defined in

[src/associates.scailo_pb.ts:2309](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L2309)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

#### Defined in

[src/associates.scailo_pb.ts:2313](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L2313)
