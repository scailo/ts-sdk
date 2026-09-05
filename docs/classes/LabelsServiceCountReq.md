[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LabelsServiceCountReq

# Class: LabelsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.LabelsServiceCountReq

## Hierarchy

- `Message`\<[`LabelsServiceCountReq`](LabelsServiceCountReq.md)\>

  ↳ **`LabelsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](LabelsServiceCountReq.md#constructor)

### Properties

- [code](LabelsServiceCountReq.md#code)
- [creationTimestampEnd](LabelsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](LabelsServiceCountReq.md#creationtimestampstart)
- [entityUuid](LabelsServiceCountReq.md#entityuuid)
- [isActive](LabelsServiceCountReq.md#isactive)
- [modificationTimestampEnd](LabelsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](LabelsServiceCountReq.md#modificationtimestampstart)
- [name](LabelsServiceCountReq.md#name)
- [fields](LabelsServiceCountReq.md#fields)
- [runtime](LabelsServiceCountReq.md#runtime)
- [typeName](LabelsServiceCountReq.md#typename)

### Methods

- [clone](LabelsServiceCountReq.md#clone)
- [equals](LabelsServiceCountReq.md#equals)
- [fromBinary](LabelsServiceCountReq.md#frombinary)
- [fromJson](LabelsServiceCountReq.md#fromjson)
- [fromJsonString](LabelsServiceCountReq.md#fromjsonstring)
- [getType](LabelsServiceCountReq.md#gettype)
- [toBinary](LabelsServiceCountReq.md#tobinary)
- [toJSON](LabelsServiceCountReq.md#tojson)
- [toJson](LabelsServiceCountReq.md#tojson-1)
- [toJsonString](LabelsServiceCountReq.md#tojsonstring)
- [equals](LabelsServiceCountReq.md#equals-1)
- [fromBinary](LabelsServiceCountReq.md#frombinary-1)
- [fromJson](LabelsServiceCountReq.md#fromjson-1)
- [fromJsonString](LabelsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LabelsServiceCountReq**(`data?`): [`LabelsServiceCountReq`](LabelsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LabelsServiceCountReq`](LabelsServiceCountReq.md)\> |

#### Returns

[`LabelsServiceCountReq`](LabelsServiceCountReq.md)

#### Overrides

Message\&lt;LabelsServiceCountReq\&gt;.constructor

#### Defined in

[src/labels.scailo_pb.ts:855](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/labels.scailo_pb.ts#L855)

## Properties

### code

• **code**: `string` = `""`

The unique code by which the label is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/labels.scailo_pb.ts:853](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/labels.scailo_pb.ts#L853)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/labels.scailo_pb.ts:791](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/labels.scailo_pb.ts#L791)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/labels.scailo_pb.ts:775](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/labels.scailo_pb.ts#L775)

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

from field: string entity_uuid = 8;

#### Defined in

[src/labels.scailo_pb.ts:839](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/labels.scailo_pb.ts#L839)

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

[src/labels.scailo_pb.ts:759](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/labels.scailo_pb.ts#L759)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/labels.scailo_pb.ts:823](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/labels.scailo_pb.ts#L823)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/labels.scailo_pb.ts:807](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/labels.scailo_pb.ts#L807)

___

### name

• **name**: `string` = `""`

The name of the label

**`Generated`**

from field: string name = 10;

#### Defined in

[src/labels.scailo_pb.ts:846](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/labels.scailo_pb.ts#L846)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/labels.scailo_pb.ts:862](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/labels.scailo_pb.ts#L862)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/labels.scailo_pb.ts:860](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/labels.scailo_pb.ts#L860)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LabelsServiceCountReq"``

#### Defined in

[src/labels.scailo_pb.ts:861](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/labels.scailo_pb.ts#L861)

## Methods

### clone

▸ **clone**(): [`LabelsServiceCountReq`](LabelsServiceCountReq.md)

Create a deep copy.

#### Returns

[`LabelsServiceCountReq`](LabelsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LabelsServiceCountReq`](LabelsServiceCountReq.md) \| `PlainMessage`\<[`LabelsServiceCountReq`](LabelsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`LabelsServiceCountReq`](LabelsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LabelsServiceCountReq`](LabelsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`LabelsServiceCountReq`](LabelsServiceCountReq.md) \| `PlainMessage`\<[`LabelsServiceCountReq`](LabelsServiceCountReq.md)\> |
| `b` | `undefined` \| [`LabelsServiceCountReq`](LabelsServiceCountReq.md) \| `PlainMessage`\<[`LabelsServiceCountReq`](LabelsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/labels.scailo_pb.ts:885](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/labels.scailo_pb.ts#L885)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LabelsServiceCountReq`](LabelsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LabelsServiceCountReq`](LabelsServiceCountReq.md)

#### Defined in

[src/labels.scailo_pb.ts:873](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/labels.scailo_pb.ts#L873)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LabelsServiceCountReq`](LabelsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LabelsServiceCountReq`](LabelsServiceCountReq.md)

#### Defined in

[src/labels.scailo_pb.ts:877](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/labels.scailo_pb.ts#L877)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LabelsServiceCountReq`](LabelsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LabelsServiceCountReq`](LabelsServiceCountReq.md)

#### Defined in

[src/labels.scailo_pb.ts:881](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/labels.scailo_pb.ts#L881)
