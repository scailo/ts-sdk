[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientsServiceSearchAllReq

# Class: ClientsServiceSearchAllReq

Broad-spectrum search and lookup request for locating and paginating clients via text matching.
This message encapsulates full-text query parameters, pagination controls, sorting keys,
lifecycle status constraints, and other core references.

**Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
inputs, and omni-box search utilities where users need to match loose textual terms against
records while retaining structural pagination.

**`Generated`**

from message Scailo.ClientsServiceSearchAllReq

## Hierarchy

- `Message`\<[`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)\>

  ↳ **`ClientsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](ClientsServiceSearchAllReq.md#constructor)

### Properties

- [count](ClientsServiceSearchAllReq.md#count)
- [entityUuid](ClientsServiceSearchAllReq.md#entityuuid)
- [isActive](ClientsServiceSearchAllReq.md#isactive)
- [offset](ClientsServiceSearchAllReq.md#offset)
- [searchKey](ClientsServiceSearchAllReq.md#searchkey)
- [sortKey](ClientsServiceSearchAllReq.md#sortkey)
- [sortOrder](ClientsServiceSearchAllReq.md#sortorder)
- [status](ClientsServiceSearchAllReq.md#status)
- [fields](ClientsServiceSearchAllReq.md#fields)
- [runtime](ClientsServiceSearchAllReq.md#runtime)
- [typeName](ClientsServiceSearchAllReq.md#typename)

### Methods

- [clone](ClientsServiceSearchAllReq.md#clone)
- [equals](ClientsServiceSearchAllReq.md#equals)
- [fromBinary](ClientsServiceSearchAllReq.md#frombinary)
- [fromJson](ClientsServiceSearchAllReq.md#fromjson)
- [fromJsonString](ClientsServiceSearchAllReq.md#fromjsonstring)
- [getType](ClientsServiceSearchAllReq.md#gettype)
- [toBinary](ClientsServiceSearchAllReq.md#tobinary)
- [toJSON](ClientsServiceSearchAllReq.md#tojson)
- [toJson](ClientsServiceSearchAllReq.md#tojson-1)
- [toJsonString](ClientsServiceSearchAllReq.md#tojsonstring)
- [equals](ClientsServiceSearchAllReq.md#equals-1)
- [fromBinary](ClientsServiceSearchAllReq.md#frombinary-1)
- [fromJson](ClientsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](ClientsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientsServiceSearchAllReq**(`data?`): [`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)\> |

#### Returns

[`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)

#### Overrides

Message\&lt;ClientsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/clients.scailo_pb.ts:1668](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/clients.scailo_pb.ts#L1668)

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

[src/clients.scailo_pb.ts:1584](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/clients.scailo_pb.ts#L1584)

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

[src/clients.scailo_pb.ts:1638](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/clients.scailo_pb.ts#L1638)

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

[src/clients.scailo_pb.ts:1568](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/clients.scailo_pb.ts#L1568)

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

[src/clients.scailo_pb.ts:1600](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/clients.scailo_pb.ts#L1600)

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

[src/clients.scailo_pb.ts:1666](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/clients.scailo_pb.ts#L1666)

___

### sortKey

• `Optional` **sortKey**: [`CLIENT_SORT_KEY`](../enums/CLIENT_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.CLIENT_SORT_KEY sort_key = 5;

#### Defined in

[src/clients.scailo_pb.ts:1622](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/clients.scailo_pb.ts#L1622)

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

[src/clients.scailo_pb.ts:1612](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/clients.scailo_pb.ts#L1612)

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

[src/clients.scailo_pb.ts:1650](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/clients.scailo_pb.ts#L1650)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/clients.scailo_pb.ts:1675](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/clients.scailo_pb.ts#L1675)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/clients.scailo_pb.ts:1673](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/clients.scailo_pb.ts#L1673)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientsServiceSearchAllReq"``

#### Defined in

[src/clients.scailo_pb.ts:1674](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/clients.scailo_pb.ts#L1674)

## Methods

### clone

▸ **clone**(): [`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md) \| `PlainMessage`\<[`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md) \| `PlainMessage`\<[`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md) \| `PlainMessage`\<[`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/clients.scailo_pb.ts:1698](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/clients.scailo_pb.ts#L1698)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)

#### Defined in

[src/clients.scailo_pb.ts:1686](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/clients.scailo_pb.ts#L1686)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)

#### Defined in

[src/clients.scailo_pb.ts:1690](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/clients.scailo_pb.ts#L1690)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceSearchAllReq`](ClientsServiceSearchAllReq.md)

#### Defined in

[src/clients.scailo_pb.ts:1694](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/clients.scailo_pb.ts#L1694)
