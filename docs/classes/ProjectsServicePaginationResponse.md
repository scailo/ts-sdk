[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProjectsServicePaginationResponse

# Class: ProjectsServicePaginationResponse

Response message for paginated queries, including total counts for UI elements.

**`Generated`**

from message Scailo.ProjectsServicePaginationResponse

## Hierarchy

- `Message`\<[`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)\>

  ↳ **`ProjectsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](ProjectsServicePaginationResponse.md#constructor)

### Properties

- [count](ProjectsServicePaginationResponse.md#count)
- [offset](ProjectsServicePaginationResponse.md#offset)
- [payload](ProjectsServicePaginationResponse.md#payload)
- [total](ProjectsServicePaginationResponse.md#total)
- [fields](ProjectsServicePaginationResponse.md#fields)
- [runtime](ProjectsServicePaginationResponse.md#runtime)
- [typeName](ProjectsServicePaginationResponse.md#typename)

### Methods

- [clone](ProjectsServicePaginationResponse.md#clone)
- [equals](ProjectsServicePaginationResponse.md#equals)
- [fromBinary](ProjectsServicePaginationResponse.md#frombinary)
- [fromJson](ProjectsServicePaginationResponse.md#fromjson)
- [fromJsonString](ProjectsServicePaginationResponse.md#fromjsonstring)
- [getType](ProjectsServicePaginationResponse.md#gettype)
- [toBinary](ProjectsServicePaginationResponse.md#tobinary)
- [toJSON](ProjectsServicePaginationResponse.md#tojson)
- [toJson](ProjectsServicePaginationResponse.md#tojson-1)
- [toJsonString](ProjectsServicePaginationResponse.md#tojsonstring)
- [equals](ProjectsServicePaginationResponse.md#equals-1)
- [fromBinary](ProjectsServicePaginationResponse.md#frombinary-1)
- [fromJson](ProjectsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](ProjectsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProjectsServicePaginationResponse**(`data?`): [`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)\> |

#### Returns

[`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)

#### Overrides

Message\&lt;ProjectsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/projects.scailo_pb.ts:850](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/projects.scailo_pb.ts#L850)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Description`**

Number of records returned in the current response slice.

**`Example`**

```ts
50
```

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/projects.scailo_pb.ts:820](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/projects.scailo_pb.ts#L820)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Description`**

The offset provided in the request.

**`Example`**

```ts
0
```

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/projects.scailo_pb.ts:830](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/projects.scailo_pb.ts#L830)

___

### payload

• **payload**: [`Project`](Project.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.Project payload = 4;

#### Defined in

[src/projects.scailo_pb.ts:848](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/projects.scailo_pb.ts#L848)

___

### total

• **total**: `bigint` = `protoInt64.zero`

**`Description`**

The total number of records matching the criteria.

**`Example`**

```ts
1250
```

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/projects.scailo_pb.ts:840](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/projects.scailo_pb.ts#L840)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/projects.scailo_pb.ts:857](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/projects.scailo_pb.ts#L857)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/projects.scailo_pb.ts:855](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/projects.scailo_pb.ts#L855)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProjectsServicePaginationResponse"``

#### Defined in

[src/projects.scailo_pb.ts:856](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/projects.scailo_pb.ts#L856)

## Methods

### clone

▸ **clone**(): [`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md) \| `PlainMessage`\<[`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md) \| `PlainMessage`\<[`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md) \| `PlainMessage`\<[`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/projects.scailo_pb.ts:876](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/projects.scailo_pb.ts#L876)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)

#### Defined in

[src/projects.scailo_pb.ts:864](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/projects.scailo_pb.ts#L864)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)

#### Defined in

[src/projects.scailo_pb.ts:868](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/projects.scailo_pb.ts#L868)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProjectsServicePaginationResponse`](ProjectsServicePaginationResponse.md)

#### Defined in

[src/projects.scailo_pb.ts:872](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/projects.scailo_pb.ts#L872)
