[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProjectsServicePaginationReq

# Class: ProjectsServicePaginationReq

Pagination request for retrieving slices of Project records.

**`Generated`**

from message Scailo.ProjectsServicePaginationReq

## Hierarchy

- `Message`\<[`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)\>

  ↳ **`ProjectsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](ProjectsServicePaginationReq.md#constructor)

### Properties

- [count](ProjectsServicePaginationReq.md#count)
- [isActive](ProjectsServicePaginationReq.md#isactive)
- [offset](ProjectsServicePaginationReq.md#offset)
- [sortKey](ProjectsServicePaginationReq.md#sortkey)
- [sortOrder](ProjectsServicePaginationReq.md#sortorder)
- [status](ProjectsServicePaginationReq.md#status)
- [fields](ProjectsServicePaginationReq.md#fields)
- [runtime](ProjectsServicePaginationReq.md#runtime)
- [typeName](ProjectsServicePaginationReq.md#typename)

### Methods

- [clone](ProjectsServicePaginationReq.md#clone)
- [equals](ProjectsServicePaginationReq.md#equals)
- [fromBinary](ProjectsServicePaginationReq.md#frombinary)
- [fromJson](ProjectsServicePaginationReq.md#fromjson)
- [fromJsonString](ProjectsServicePaginationReq.md#fromjsonstring)
- [getType](ProjectsServicePaginationReq.md#gettype)
- [toBinary](ProjectsServicePaginationReq.md#tobinary)
- [toJSON](ProjectsServicePaginationReq.md#tojson)
- [toJson](ProjectsServicePaginationReq.md#tojson-1)
- [toJsonString](ProjectsServicePaginationReq.md#tojsonstring)
- [equals](ProjectsServicePaginationReq.md#equals-1)
- [fromBinary](ProjectsServicePaginationReq.md#frombinary-1)
- [fromJson](ProjectsServicePaginationReq.md#fromjson-1)
- [fromJsonString](ProjectsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProjectsServicePaginationReq**(`data?`): [`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)\> |

#### Returns

[`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)

#### Overrides

Message\&lt;ProjectsServicePaginationReq\&gt;.constructor

#### Defined in

[src/projects.scailo_pb.ts:772](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/projects.scailo_pb.ts#L772)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to return per page.

**`Example`**

```ts
50
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Must be a strictly positive integer (1 or greater).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/projects.scailo_pb.ts:720](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/projects.scailo_pb.ts#L720)

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

[src/projects.scailo_pb.ts:704](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/projects.scailo_pb.ts#L704)

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

[src/projects.scailo_pb.ts:736](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/projects.scailo_pb.ts#L736)

___

### sortKey

• `Optional` **sortKey**: [`PROJECT_SORT_KEY`](../enums/PROJECT_SORT_KEY.md)

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: optional Scailo.PROJECT_SORT_KEY sort_key = 5;

#### Defined in

[src/projects.scailo_pb.ts:758](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/projects.scailo_pb.ts#L758)

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

[src/projects.scailo_pb.ts:748](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/projects.scailo_pb.ts#L748)

___

### status

• `Optional` **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)

**`Optional`**

**`Description`**

Filter results by a specific lifecycle status.

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/projects.scailo_pb.ts:770](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/projects.scailo_pb.ts#L770)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/projects.scailo_pb.ts:779](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/projects.scailo_pb.ts#L779)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/projects.scailo_pb.ts:777](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/projects.scailo_pb.ts#L777)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProjectsServicePaginationReq"``

#### Defined in

[src/projects.scailo_pb.ts:778](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/projects.scailo_pb.ts#L778)

## Methods

### clone

▸ **clone**(): [`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md) \| `PlainMessage`\<[`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md) \| `PlainMessage`\<[`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md) \| `PlainMessage`\<[`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/projects.scailo_pb.ts:800](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/projects.scailo_pb.ts#L800)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)

#### Defined in

[src/projects.scailo_pb.ts:788](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/projects.scailo_pb.ts#L788)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)

#### Defined in

[src/projects.scailo_pb.ts:792](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/projects.scailo_pb.ts#L792)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProjectsServicePaginationReq`](ProjectsServicePaginationReq.md)

#### Defined in

[src/projects.scailo_pb.ts:796](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/projects.scailo_pb.ts#L796)
