[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsFreeIssueMaterialsServicePaginationResponse

# Class: InwardJobsFreeIssueMaterialsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.InwardJobsFreeIssueMaterialsServicePaginationResponse

## Hierarchy

- `Message`\<[`InwardJobsFreeIssueMaterialsServicePaginationResponse`](InwardJobsFreeIssueMaterialsServicePaginationResponse.md)\>

  ↳ **`InwardJobsFreeIssueMaterialsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](InwardJobsFreeIssueMaterialsServicePaginationResponse.md#constructor)

### Properties

- [count](InwardJobsFreeIssueMaterialsServicePaginationResponse.md#count)
- [offset](InwardJobsFreeIssueMaterialsServicePaginationResponse.md#offset)
- [payload](InwardJobsFreeIssueMaterialsServicePaginationResponse.md#payload)
- [total](InwardJobsFreeIssueMaterialsServicePaginationResponse.md#total)
- [fields](InwardJobsFreeIssueMaterialsServicePaginationResponse.md#fields)
- [runtime](InwardJobsFreeIssueMaterialsServicePaginationResponse.md#runtime)
- [typeName](InwardJobsFreeIssueMaterialsServicePaginationResponse.md#typename)

### Methods

- [clone](InwardJobsFreeIssueMaterialsServicePaginationResponse.md#clone)
- [equals](InwardJobsFreeIssueMaterialsServicePaginationResponse.md#equals)
- [fromBinary](InwardJobsFreeIssueMaterialsServicePaginationResponse.md#frombinary)
- [fromJson](InwardJobsFreeIssueMaterialsServicePaginationResponse.md#fromjson)
- [fromJsonString](InwardJobsFreeIssueMaterialsServicePaginationResponse.md#fromjsonstring)
- [getType](InwardJobsFreeIssueMaterialsServicePaginationResponse.md#gettype)
- [toBinary](InwardJobsFreeIssueMaterialsServicePaginationResponse.md#tobinary)
- [toJSON](InwardJobsFreeIssueMaterialsServicePaginationResponse.md#tojson)
- [toJson](InwardJobsFreeIssueMaterialsServicePaginationResponse.md#tojson-1)
- [toJsonString](InwardJobsFreeIssueMaterialsServicePaginationResponse.md#tojsonstring)
- [equals](InwardJobsFreeIssueMaterialsServicePaginationResponse.md#equals-1)
- [fromBinary](InwardJobsFreeIssueMaterialsServicePaginationResponse.md#frombinary-1)
- [fromJson](InwardJobsFreeIssueMaterialsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](InwardJobsFreeIssueMaterialsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsFreeIssueMaterialsServicePaginationResponse**(`data?`): [`InwardJobsFreeIssueMaterialsServicePaginationResponse`](InwardJobsFreeIssueMaterialsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsFreeIssueMaterialsServicePaginationResponse`](InwardJobsFreeIssueMaterialsServicePaginationResponse.md)\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServicePaginationResponse`](InwardJobsFreeIssueMaterialsServicePaginationResponse.md)

#### Overrides

Message\&lt;InwardJobsFreeIssueMaterialsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1704](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1704)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1674](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1674)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1684](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1684)

___

### payload

• **payload**: [`InwardJobFreeIssueMaterial`](InwardJobFreeIssueMaterial.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.InwardJobFreeIssueMaterial payload = 4;

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1702](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1702)

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

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1694](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1694)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1711](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1711)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1709](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1709)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsFreeIssueMaterialsServicePaginationResponse"``

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1710](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1710)

## Methods

### clone

▸ **clone**(): [`InwardJobsFreeIssueMaterialsServicePaginationResponse`](InwardJobsFreeIssueMaterialsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`InwardJobsFreeIssueMaterialsServicePaginationResponse`](InwardJobsFreeIssueMaterialsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsFreeIssueMaterialsServicePaginationResponse`](InwardJobsFreeIssueMaterialsServicePaginationResponse.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsServicePaginationResponse`](InwardJobsFreeIssueMaterialsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsFreeIssueMaterialsServicePaginationResponse`](InwardJobsFreeIssueMaterialsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsFreeIssueMaterialsServicePaginationResponse`](InwardJobsFreeIssueMaterialsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`InwardJobsFreeIssueMaterialsServicePaginationResponse`](InwardJobsFreeIssueMaterialsServicePaginationResponse.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsServicePaginationResponse`](InwardJobsFreeIssueMaterialsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`InwardJobsFreeIssueMaterialsServicePaginationResponse`](InwardJobsFreeIssueMaterialsServicePaginationResponse.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsServicePaginationResponse`](InwardJobsFreeIssueMaterialsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1730](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1730)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsFreeIssueMaterialsServicePaginationResponse`](InwardJobsFreeIssueMaterialsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServicePaginationResponse`](InwardJobsFreeIssueMaterialsServicePaginationResponse.md)

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1718](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1718)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsFreeIssueMaterialsServicePaginationResponse`](InwardJobsFreeIssueMaterialsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServicePaginationResponse`](InwardJobsFreeIssueMaterialsServicePaginationResponse.md)

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1722](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1722)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsFreeIssueMaterialsServicePaginationResponse`](InwardJobsFreeIssueMaterialsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServicePaginationResponse`](InwardJobsFreeIssueMaterialsServicePaginationResponse.md)

#### Defined in

[src/inward_jobs_free_issue_materials.scailo_pb.ts:1726](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inward_jobs_free_issue_materials.scailo_pb.ts#L1726)
